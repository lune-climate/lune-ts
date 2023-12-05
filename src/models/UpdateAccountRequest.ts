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

/**
 * It's only possible to edit the name and beneficiary of an account.
 *
 * Not providing the `beneficiary` property will result in clearing the existing value (if present).
 *
 */
export type UpdateAccountRequest = {
    /**
     * The account name.
     */
    name: string
    /**
     * The account beneficiary.
     */
    beneficiary?: string
    /**
     * The bundle portfolio unique identifier.
     */
    bundlePortfolioId?: string
    /**
     * `handle` is a client defined URL-friendly string that identifies the account.
     *
     * The `handle` is unique per organisation and account type.
     *
     */
    handle?: string
}
