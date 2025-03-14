import type { Template } from './Provider.js';
import type { BaseConnection } from './Connection.js';

export enum AuthModes {
    OAuth1 = 'OAUTH1',
    OAuth2 = 'OAUTH2'
}

export enum OAuthAuthorizationMethod {
    BODY = 'body',
    HEADER = 'header'
}

export enum OAuthBodyFormat {
    FORM = 'form',
    JSON = 'json'
}

export interface OAuthSession {
    providerConfigKey: string;
    provider: string;
    connectionId: string;
    callbackUrl: string;
    authMode: AuthModes;
    id: string;
    connectionConfig: Record<string, string>;
    accountId: number;
    webSocketClientId: string | undefined;

    // Needed for OAuth 2.0 PKCE
    codeVerifier: string;

    // Needed for oAuth 1.0a
    requestTokenSecret?: string;
}

export interface TemplateOAuth2 extends Template {
    auth_mode: AuthModes.OAuth2;

    disable_pkce?: boolean; // Defaults to false (=PKCE used) if not provided

    token_params?: {
        grant_type?: 'authorization_code' | 'client_credentials';
    };

    refresh_params?: {
        grant_type: 'refresh_token';
    };
    authorization_method?: OAuthAuthorizationMethod;
    body_format?: OAuthBodyFormat;

    refresh_url?: string;

    token_request_auth_method?: 'basic';
}

export interface TemplateOAuth1 extends Template {
    auth_mode: AuthModes.OAuth1;

    request_url: string;
    request_params?: Record<string, string>;
    request_http_method?: 'GET' | 'PUT' | 'POST'; // Defaults to POST if not provided

    token_http_method?: 'GET' | 'PUT' | 'POST'; // Defaults to POST if not provided

    signature_method: 'HMAC-SHA1' | 'RSA-SHA1' | 'PLAINTEXT';
}

export type OAuth1RequestTokenResult = {
    request_token: string;
    request_token_secret: string;
    parsed_query_string: any;
};

export interface CredentialsCommon {
    type: AuthModes;
    raw: Record<string, string>; // Raw response for credentials as received by the OAuth server or set by the user
}

export type AuthCredentials = OAuth2Credentials | OAuth1Credentials;

export interface OAuth2Credentials extends CredentialsCommon {
    type: AuthModes.OAuth2;
    access_token: string;

    refresh_token?: string;
    expires_at?: Date | undefined;
}

export interface OAuth1Credentials extends CredentialsCommon {
    type: AuthModes.OAuth1;
    oauth_token: string;
    oauth_token_secret: string;
}

export interface CredentialsRefresh {
    providerConfigKey: string;
    connectionId: string;
    promise: Promise<OAuth2Credentials>;
}

export type RefreshTokenResponse = AuthorizationTokenResponse;

export interface AuthorizationTokenResponse extends Omit<OAuth2Credentials, 'type' | 'raw'> {
    expires_in?: number;
}

export type ImportedCredentials =
    | (OAuth2Credentials & Partial<Pick<AuthorizationTokenResponse, 'expires_in'>> & Partial<Pick<BaseConnection, 'metadata' | 'connection_config'>>)
    | OAuth1Credentials;
