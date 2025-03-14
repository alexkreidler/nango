import { schema } from '../../db/database.js';
import { verifyUniqueKeysAreUnique } from './data-records.service.js';
import { createActivityLogMessage } from '../activity.service.js';
import type { UpsertResponse } from '../../models/Data.js';
import type { DataRecord } from '../../models/Sync.js';

/**
 * Upsert
 */
export async function upsert(
    response: DataRecord[],
    dbTable: string,
    uniqueKey: string,
    nangoConnectionId: number,
    model: string,
    activityLogId: number
): Promise<UpsertResponse> {
    const responseWithoutDuplicates = await removeDuplicateKey(response, uniqueKey, activityLogId, model);
    const addedKeys = await getAddedKeys(responseWithoutDuplicates, dbTable, uniqueKey, nangoConnectionId, model);
    const updatedKeys = await getUpdatedKeys(responseWithoutDuplicates, dbTable, uniqueKey, nangoConnectionId, model);

    if (responseWithoutDuplicates.length === 0) {
        return {
            success: false,
            error: 'There are no records to upsert because there were no records that were not duplicates to insert'
        };
    }

    try {
        const results = await schema()
            .from(dbTable)
            .insert(responseWithoutDuplicates, ['id', 'external_id'])
            .onConflict(['nango_connection_id', 'external_id', 'model'])
            .merge()
            .returning(['id', 'external_id']);

        const affectedInternalIds = results.map((tuple) => tuple.id) as string[];
        const affectedExternalIds = results.map((tuple) => tuple.external_id) as string[];

        return {
            success: true,
            summary: {
                addedKeys,
                updatedKeys,
                affectedInternalIds,
                affectedExternalIds
            }
        };
    } catch (error: any) {
        let errorMessage = `Failed to upsert records to table ${dbTable}.\n`;
        errorMessage += `Model: ${model}, Unique Key: ${uniqueKey}, Nango Connection ID: ${nangoConnectionId}.\n`;
        errorMessage += `Attempted to insert/update: ${responseWithoutDuplicates.length} records\n`;

        if ('code' in error) errorMessage += `Error code: ${error.code}.\n`;
        if ('detail' in error) errorMessage += `Detail: ${error.detail}.\n`;

        errorMessage += `Error Message: ${error.message}`;

        return {
            success: false,
            error: errorMessage
        };
    }
}

export async function removeDuplicateKey(response: DataRecord[], uniqueKey: string, activityLogId: number, model: string): Promise<DataRecord[]> {
    const { isUnique, nonUniqueKey } = verifyUniqueKeysAreUnique(response, uniqueKey);

    if (!isUnique) {
        await createActivityLogMessage({
            level: 'error',
            activity_log_id: activityLogId,
            content: `There was a duplicate key found: ${nonUniqueKey}. This record will not be inserted to the model ${model}.`,
            timestamp: Date.now()
        });

        const uniqueResponse = response.filter((item) => item[uniqueKey] !== nonUniqueKey);
        return uniqueResponse;
    }

    return response;
}

/**
 * Compute Added Keys
 * @desc for any incoming payload use the provided unique to check against the rows
 * in the database and return the keys that are not in the database
 *
 */
export async function getAddedKeys(
    response: DataRecord[],
    dbTable: string,
    uniqueKey: string,
    nangoConnectionId: number,
    model: string
): Promise<Array<string>> {
    const keys: Array<string> = response.map((data: DataRecord) => String(data[uniqueKey]));

    const knownKeys: Array<string> = (await schema()
        .from(dbTable)
        .where('nango_connection_id', nangoConnectionId)
        .where('model', model)
        .whereIn('external_id', keys)
        .pluck('external_id')) as unknown as Array<string>;

    const unknownKeys: Array<string> = keys?.filter((data: string) => !knownKeys.includes(data));

    return unknownKeys;
}

/**
 * Get Updated Keys
 * @desc generate an array of the keys that exist in the database and also in
 * the incoming payload that will be used to update the database.
 * Compare using the data_hash key
 *
 */
export async function getUpdatedKeys(
    response: DataRecord[],
    dbTable: string,
    uniqueKey: string,
    nangoConnectionId: number,
    model: string
): Promise<Array<string>> {
    const keys: Array<string> = response.map((data: DataRecord) => String(data[uniqueKey]));
    const keysWithHash: [string, string][] = response.map((data: DataRecord) => [String(data[uniqueKey]), data['data_hash'] as string]);

    const rowsToUpdate = await schema()
        .from(dbTable)
        .pluck('external_id')
        .where('nango_connection_id', nangoConnectionId)
        .where('model', model)
        .whereIn('external_id', keys)
        .whereNotIn(['external_id', 'data_hash'], keysWithHash);

    return rowsToUpdate;
}
