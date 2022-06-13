/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountType } from './AccountType'
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
    type: AccountType
    /**
     * The account beneficiary.
     */
    beneficiary?: string
}
