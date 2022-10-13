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
}
