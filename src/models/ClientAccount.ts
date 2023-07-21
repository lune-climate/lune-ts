/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountBase } from './AccountBase'

/**
 * Client accounts are designed for clients working with multi-tenancy applications.
 *
 * Client accounts are created programmatically. The API key (created in live or test mode) determines whether the Client account is a live or test account.
 *
 * Create a Client Account for each of your customers to segregate their API operations.
 *
 * Use the special `Lune-Account` header to perform operations against a specific Client Account.
 *
 */
export type ClientAccount = AccountBase & {
    scope: ClientAccount.scope
}

export namespace ClientAccount {
    export enum scope {
        CLIENT_ACCOUNT = 'client_account',
    }
}
