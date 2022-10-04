/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode'

export type CreateClientAccountRequest = {
    /**
     * The account name.
     */
    name: string
    /**
     * The account currency.
     */
    currency: CurrencyCode
    /**
     * The account beneficiary.
     */
    beneficiary?: string
}
