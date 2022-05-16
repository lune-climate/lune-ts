/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountScope } from './AccountScope'
import type { AccountType } from './AccountType'
import type { CurrencyCode } from './CurrencyCode'

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
     * The scope of the account(s). If standard, a pair of test and live accounts will be created, otherwise a single client account is created.
     *
     */
    scope: AccountScope
    /**
     * The account type. This field is unused if creating a pair of accounts.
     */
    type?: AccountType
    /**
     * The account beneficiary.
     */
    beneficiary?: string
}
