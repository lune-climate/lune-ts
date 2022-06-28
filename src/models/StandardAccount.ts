/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountBase } from './AccountBase'

export type StandardAccount = AccountBase & {
    scope: StandardAccount.scope
    /**
     * Account id of the paired account.
     *
     * A live account points to its sibling test account and vice versa.
     *
     */
    siblingId: string
}

export namespace StandardAccount {
    export enum scope {
        ACCOUNT = 'account',
    }
}
