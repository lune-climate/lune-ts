/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountBase } from './AccountBase'

export type ClientAccount = AccountBase & {
    scope: ClientAccount.scope
}

export namespace ClientAccount {
    export enum scope {
        CLIENT_ACCOUNT = 'client_account',
    }
}
