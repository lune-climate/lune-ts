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

import type { CurrencyCode } from './CurrencyCode.js'

export type CreateAccountRequest = {
    /**
     * The account name.
     */
    name: string
    /**
     * The account currency.
     */
    currency: CurrencyCode
    /**
     * The account beneficiary. Leading and trailing spaces are removed.
     */
    beneficiary?: string
    /**
     * `handle` is a client defined URL-friendly string that identifies the account.
     *
     * The `handle` is unique per organisation and account type.
     *
     */
    handle?: string
}
