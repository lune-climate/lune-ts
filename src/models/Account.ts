// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountBase } from './AccountBase.js'

/**
 * An Account represents the entity which performs API operations.
 *
 * Each API operation like creating an order or creating an emission estimate is ring-fenced within an Account.
 *
 */
export type Account = AccountBase & {
    scope: Account.scope
    /**
     * Account id of the paired account.
     *
     * A live account points to its sibling test account and vice versa.
     *
     */
    siblingId: string
}

export namespace Account {
    export enum scope {
        ACCOUNT = 'account',
    }
}
