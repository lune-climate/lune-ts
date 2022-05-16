/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * It's only possible to edit the name and beneficiary of an account.
 */
export type UpdateAccountRequest = {
    /**
     * The account name.
     */
    name: string
    /**
     * The account beneficiary.
     */
    beneficiary: string
}
