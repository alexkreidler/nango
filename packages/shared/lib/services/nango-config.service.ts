import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import ms from 'ms';

import type { NangoConfig, SimplifiedNangoIntegration, NangoSyncConfig, NangoSyncModel } from '../integrations/index.js';
import type { NangoConnection } from '../models/Connection.js';
import { getSyncConfig } from './sync/config.service.js';
import { isCloud } from '../utils/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const nangoConfigFile = 'nango.yaml';
export const SYNC_FILE_EXTENSION = 'js';

export function loadNangoConfig(
    nangoConnection: NangoConnection | null,
    syncName?: string,
    syncId?: string,
    loadLocation?: string
): Promise<NangoConfig | null> {
    if (isCloud()) {
        return getSyncConfig(nangoConnection as NangoConnection, syncName, syncId);
    } else {
        return loadLocalNangoConfig(loadLocation);
    }
}

export function loadLocalNangoConfig(loadLocation?: string): Promise<NangoConfig | null> {
    let location;

    if (loadLocation) {
        location = `${loadLocation}/${nangoConfigFile}`;
    } else if (process.env['NANGO_INTEGRATIONS_FULL_PATH']) {
        location = path.resolve(process.env['NANGO_INTEGRATIONS_FULL_PATH'], nangoConfigFile);
    } else {
        location = path.resolve(__dirname, `../nango-integrations/${nangoConfigFile}`);
    }

    try {
        const yamlConfig = fs.readFileSync(location, 'utf8');
        const configData: NangoConfig = yaml.load(yamlConfig) as unknown as NangoConfig;

        return Promise.resolve(configData);
    } catch (error) {
        console.log(`no nango.yaml config found at ${location}`);
    }

    return Promise.resolve(null);
}

export async function loadSimplifiedConfig(loadLocation?: string): Promise<SimplifiedNangoIntegration[] | null> {
    try {
        const configData: NangoConfig = (await loadLocalNangoConfig(loadLocation)) as NangoConfig;

        if (!configData) {
            return null;
        }
        const config = convertConfigObject(configData);

        return config;
    } catch (error) {
        console.log(error);
    }

    return null;
}

export function checkForIntegrationFile(syncName: string, optionalNangoIntegrationsDirPath?: string) {
    let nangoIntegrationsDirPath;

    if (optionalNangoIntegrationsDirPath) {
        nangoIntegrationsDirPath = optionalNangoIntegrationsDirPath;
    } else if (process.env['NANGO_INTEGRATIONS_FULL_PATH']) {
        nangoIntegrationsDirPath = process.env['NANGO_INTEGRATIONS_FULL_PATH'];
    } else {
        nangoIntegrationsDirPath = path.resolve(__dirname, '../nango-integrations');
    }

    const distDirPath = path.resolve(nangoIntegrationsDirPath, 'dist');

    if (!fs.existsSync(nangoIntegrationsDirPath)) {
        return {
            result: false,
            path: nangoIntegrationsDirPath
        };
    }

    if (!fs.existsSync(distDirPath)) {
        return {
            result: false,
            path: distDirPath
        };
    }

    const filePath = path.resolve(distDirPath, `${syncName}.${SYNC_FILE_EXTENSION}`);
    let realPath;
    try {
        realPath = fs.realpathSync(filePath);
    } catch (err) {
        realPath = filePath;
    }

    return {
        result: fs.existsSync(realPath),
        path: realPath
    };
}

const resolveIntegrationFile = (syncName: string): string => {
    if (process.env['NANGO_INTEGRATIONS_FULL_PATH']) {
        return path.resolve(process.env['NANGO_INTEGRATIONS_FULL_PATH'], `dist/${syncName}.${SYNC_FILE_EXTENSION}`);
    } else {
        return path.resolve(__dirname, `../nango-integrations/dist/${syncName}.${SYNC_FILE_EXTENSION}`);
    }
};

export function getIntegrationFile(syncName: string, setIntegrationPath?: string | null) {
    try {
        const filePath = setIntegrationPath ? `${setIntegrationPath}/dist/${syncName}.${SYNC_FILE_EXTENSION}` : resolveIntegrationFile(syncName);
        const realPath = fs.realpathSync(filePath);
        const integrationFileContents = fs.readFileSync(realPath, 'utf8');

        return integrationFileContents;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function getRootDir(optionalLoadLocation?: string) {
    if (isCloud()) {
        return './';
    }

    if (optionalLoadLocation) {
        return optionalLoadLocation;
    } else if (process.env['NANGO_INTEGRATIONS_FULL_PATH']) {
        return `${process.env['NANGO_INTEGRATIONS_FULL_PATH']}/dist`;
    } else {
        return path.resolve(__dirname, '../nango-integrations/dist');
    }
}

export async function getIntegrationClass(syncName: string, setIntegrationPath?: string) {
    try {
        const filePath = setIntegrationPath || resolveIntegrationFile(syncName);
        const realPath = fs.realpathSync(filePath) + `?v=${Math.random().toString(36).substring(3)}`;
        const { default: integrationCode } = await import(realPath);
        const integrationClass = new integrationCode();

        return integrationClass;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export function convertConfigObject(config: NangoConfig): SimplifiedNangoIntegration[] {
    const output = [];

    for (const providerConfigKey in config.integrations) {
        const syncs = [];
        const integration = config.integrations[providerConfigKey];
        for (const syncName in integration) {
            const sync: NangoSyncConfig = integration[syncName] as NangoSyncConfig;
            const models: NangoSyncModel[] = [];
            sync.returns.forEach((model) => {
                const modelFields = [];
                const modelData = config.models[model] || config.models[`${model.slice(0, -1)}`];
                for (const fieldName in modelData) {
                    const fieldType = modelData[fieldName];
                    if (typeof fieldType === 'object') {
                        for (const subFieldName in fieldType) {
                            const subFieldType = fieldType[subFieldName];
                            modelFields.push({ name: `${fieldName}.${subFieldName}`, type: subFieldType as string });
                        }
                    } else {
                        modelFields.push({ name: fieldName, type: fieldType as string });
                    }
                }
                models.push({ name: model, fields: [modelFields] });
            });

            syncs.push({ name: syncName, runs: sync.runs, returns: sync.returns, models });
        }
        output.push({ providerConfigKey, syncs });
    }

    return output;
}

export function getOffset(interval: string, date: Date): number {
    const intervalMilliseconds = ms(interval);

    const nowMilliseconds = date.getMinutes() * 60 * 1000 + date.getSeconds() * 1000 + date.getMilliseconds();

    const offset = nowMilliseconds % intervalMilliseconds;

    return offset;
}

/**
 * Get Interval
 * @desc get the interval based on the runs property in the yaml. The offset
 * should be the amount of time that the interval should be offset by.
 * If the time is 1536 and the interval is 30m then the next time the sync should run is 1606
 * and then 1636 etc. The offset should be based on the interval and should never be
 * greater than the interval
 */
export function getInterval(runs: string, date: Date): { interval: string; offset: number } {
    if (runs === 'every half hour') {
        return { interval: '30m', offset: getOffset('30m', date) };
    }

    if (runs === 'every quarter hour') {
        return { interval: '15m', offset: getOffset('15m', date) };
    }

    if (runs === 'every hour') {
        return { interval: '1h', offset: getOffset('1h', date) };
    }

    const interval = runs.replace('every ', '');

    if (ms(interval) < ms('5m')) {
        throw new Error('interval must be greater than 5 minutes');
    }

    const offset = getOffset(interval, date);

    return { interval, offset };
}
