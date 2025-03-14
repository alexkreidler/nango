import { fileURLToPath } from 'url';
import path, { resolve } from 'path';
import type { Request } from 'express';
import type { User, Account, Template as ProviderTemplate } from '@nangohq/shared';
import logger from './logger.js';
import type { WSErr } from './web-socket-error.js';
import { readFileSync } from 'fs';
import { NangoError, userService, accountService, interpolateString, isCloud, getBaseUrl } from '@nangohq/shared';

type PackageJson = {
    version: string;
};

export async function getOauthCallbackUrl(accountId?: number) {
    const globalCallbackUrl = getGlobalOAuthCallbackUrl();

    if (isCloud() && accountId != null) {
        const account: Account | null = await accountService.getAccountById(accountId);
        return account?.callback_url || globalCallbackUrl;
    }

    return globalCallbackUrl;
}

export function getGlobalOAuthCallbackUrl() {
    return process.env['NANGO_CALLBACK_URL'] || getBaseUrl() + '/oauth/callback';
}

export async function getUserAndAccountFromSession(req: Request): Promise<{ user: User; account: Account }> {
    const sessionUser = req.user;

    if (sessionUser == null) {
        throw new NangoError('user_not_found');
    }

    const user = await userService.getUserById(sessionUser.id);

    if (user == null) {
        throw new NangoError('user_not_found');
    }

    const account = await accountService.getAccountById(user.account_id);

    if (account == null) {
        throw new NangoError('account_not_found');
    }

    return { user: user, account: account };
}

export function dirname() {
    return path.dirname(fileURLToPath(import.meta.url));
}

/**
 * A helper function to check if replacers contains all necessary params to interpolate string.
 * interpolateString('Hello ${name} of ${age} years", {name: 'Tester'}) -> returns false
 */
export function missesInterpolationParam(str: string, replacers: Record<string, any>) {
    const interpolatedStr = interpolateString(str, replacers);
    return /\${([^{}]*)}/g.test(interpolatedStr);
}

/**
 * A helper function to extract the additional connection configuration options from the frontend Auth request.
 */
export function getConnectionConfig(queryParams: any): Record<string, string> {
    let arr = Object.entries(queryParams);
    arr = arr.filter(([_, v]) => typeof v === 'string'); // Filter strings
    arr = arr.map(([k, v]) => [`connectionConfig.params.${k}`, v]); // Format keys to 'connectionConfig.params.[key]'
    return Object.fromEntries(arr) as Record<string, string>;
}

/**
 * A helper function to extract the additional connection metadata returned from the Provider in the callback request.
 */
export function getConnectionMetadataFromCallbackRequest(queryParams: any, template: ProviderTemplate): Record<string, string> {
    if (!queryParams || !template.redirect_uri_metadata) {
        return {};
    }

    const whitelistedKeys = template.redirect_uri_metadata;

    // Filter out non-strings & non-whitelisted keys.
    const arr = Object.entries(queryParams).filter(([k, v]) => typeof v === 'string' && whitelistedKeys.includes(k));

    return arr != null && arr.length > 0 ? (Object.fromEntries(arr) as Record<string, string>) : {};
}

/**
 * A helper function to extract the additional connection metadata returned from the Provider in the token response.
 */
export function getConnectionMetadataFromTokenResponse(params: any, template: ProviderTemplate): Record<string, string> {
    if (!params || !template.token_response_metadata) {
        return {};
    }

    const whitelistedKeys = template.token_response_metadata;

    // Filter out non-strings & non-whitelisted keys.
    const arr = Object.entries(params).filter(([k, v]) => typeof v === 'string' && whitelistedKeys.includes(k));

    return arr != null && arr.length > 0 ? (Object.fromEntries(arr) as Record<string, string>) : {};
}

/**
 * A version of JSON.parse that detects Date strings and transforms them back into
 * Date objects. This depends on how dates were serialized obviously.
 *
 * @remarks
 * Source: https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
 */
export function parseJsonDateAware(input: string) {
    const dateFormat =
        /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
    // @ts-ignore
    return JSON.parse(input, (key, value) => {
        if (typeof value === 'string' && dateFormat.test(value)) {
            return new Date(value);
        }

        return value;
    });
}

export function parseConnectionConfigParamsFromTemplate(template: ProviderTemplate): string[] {
    const tokenUrlMatches = template.token_url.match(/\${connectionConfig\.params\.([^{}]*)}/g);
    const authorizationUrlMatches = template.authorization_url.match(/\${connectionConfig\.params\.([^{}]*)}/g);
    const params = [...(tokenUrlMatches || []), ...(authorizationUrlMatches || [])].filter((value, index, array) => array.indexOf(value) === index);
    return params.map((param) => param.replace('${connectionConfig.params.', '').replace('}', '')); // Remove the ${connectionConfig.params.'} and return only the param name.
}

/**
 * This can be used to convert the keys of a Json to snake case
 * @param payload This the json we want to convert from a camelCase a snake_case
 */
export function convertJsonKeysToSnakeCase<R>(payload: Record<string, any>): R | null {
    if (payload == null) {
        return null;
    }
    return Object.entries(payload).reduce((accum: any, current) => {
        const [key, value] = current;
        const newKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        accum[newKey] = value;
        return accum;
    }, {});
}

/**
 *
 * @param payload The json we want to convert its keys to camelCase
 */
export function convertJsonKeysToCamelCase<R>(payload: Record<string, any>): R | null {
    if (payload == null) {
        return null;
    }
    return Object.entries(payload).reduce((accum: any, current) => {
        const [key, value] = current;
        const newKey = key.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
        accum[newKey] = value;
        return accum;
    }, {});
}

/**
 *
 * @remarks
 * Yes including a full HTML template here in a string goes against many best practices.
 * Yet it also felt wrong to add another dependency to simply parse 1 template.
 * If you have an idea on how to improve this feel free to submit a pull request.
 */
function html(res: any, error: boolean) {
    const resultHTML = `
<!--
Nango OAuth flow callback. Read more about how to use it at: https://github.com/NangoHQ/nango
-->
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorization callback</title>
  </head>
  <body>
    <noscript>JavaScript is required to proceed with the authentication.</noscript>
    <script type="text/javascript">
      // Close the modal
      window.setTimeout(function() {
        window.close()
      }, 300);
    </script>
  </body>
</html>
`;

    if (error) {
        res.status(500);
    } else {
        res.status(200);
    }
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(resultHTML));
}

function oldErrorHtml(res: any, wsErr: WSErr) {
    const resultHTMLTemplate = `
<!--
Nango OAuth flow callback. Read more about how to use it at: https://github.com/NangoHQ/nango
-->
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorization callback</title>
  </head>
  <body>
    <noscript>JavaScript is required to proceed with the authentication.</noscript>
    <script type="text/javascript">
      window.authErrorType = \'\${errorType}\';
      window.authErrorDesc = \'\${errorDesc}\';

      const message = {};
      message.eventType = 'AUTHORIZATION_FAILED';
      message.data = {
        error: {
            type: window.authErrorType,
            message: window.authErrorDesc
        }
      };

      // Tell the world what happened
      window.opener && window.opener.postMessage(message, '*');

      // Close the modal
      window.setTimeout(function() {
        window.close()
      }, 300);
    </script>
  </body>
</html>
`;
    const resultHTML = interpolateString(resultHTMLTemplate, {
        errorType: wsErr.type.replace('\n', '\\n'),
        errorDesc: wsErr.message.replace('\n', '\\n')
    });

    logger.debug(`Got an error in the OAuth flow: ${wsErr.type} - ${wsErr.message}`);
    res.status(500);
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(resultHTML));
}

/**
 *
 * Legacy method to support old frontend SDKs.
 */
export function errorHtml(res: any, wsClientId: string | undefined, wsErr: WSErr) {
    if (wsClientId != null) {
        return html(res, true);
    } else {
        return oldErrorHtml(res, wsErr);
    }
}

/**
 *
 * Legacy method to support old frontend SDKs.
 */
export function successHtml(res: any, wsClientId: string | undefined, providerConfigKey: string, connectionId: string) {
    if (wsClientId != null) {
        return html(res, false);
    } else {
        return oldSuccessHtml(res, providerConfigKey, connectionId);
    }
}

/**
 *
 * Legacy method to support old frontend SDKs.
 */
function oldSuccessHtml(res: any, providerConfigKey: string, connectionId: string) {
    const resultHTMLTemplate = `
<!--
Nango OAuth flow callback. Read more about how to use it at: https://github.com/NangoHQ/nango
-->
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorization callback</title>
  </head>
  <body>
    <noscript>JavaScript is required to proceed with the authentication.</noscript>
    <script type="text/javascript">
      window.providerConfigKey = \`\${providerConfigKey}\`;
      window.connectionId = \`\${connectionId}\`;

      const message = {};
      message.eventType = 'AUTHORIZATION_SUCEEDED';
      message.data = { connectionId: window.connectionId, providerConfigKey: window.providerConfigKey };

      // Tell the world what happened
      window.opener && window.opener.postMessage(message, '*');

      // Close the modal
      window.setTimeout(function() {
        window.close()
      }, 300);
    </script>
  </body>
</html>
`;
    const resultHTML = interpolateString(resultHTMLTemplate, {
        providerConfigKey: providerConfigKey,
        connectionId: connectionId
    });

    res.status(200);
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(resultHTML));
}

export function resetPasswordSecret() {
    return process.env['NANGO_ADMIN_KEY'] || 'nango';
}

export function packageJsonFile(): PackageJson {
    const localPath = process.env['SERVER_RUN_MODE'] === 'DOCKERIZED' ? 'packages/server/package.json' : 'package.json';
    return JSON.parse(readFileSync(resolve(process.cwd(), localPath)).toString('utf-8'));
}
