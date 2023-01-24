/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Providing null on a property will result in clearing the existing value (if present).
 *
 */
export type PartialUpdateAccountRequest = {
    /**
     * The account name.
     */
    name?: string
    /**
     * The account beneficiary.
     */
    beneficiary?: string | null
    /**
     * The bundle portfolio unique identifier.
     */
    bundlePortfolioId?: string | null
}
