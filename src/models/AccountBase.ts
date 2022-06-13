/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountType } from './AccountType'

export type AccountBase = {
    /**
     * The Account's unique identifier
     */
    id: string
    /**
     * The Account's name
     */
    name: string
    /**
     * The unique identifier of the organisation this account belongs to
     */
    organisationId: string
    /**
     * The Account's currency
     */
    currency: string
    /**
     * Account's cash balance.
     *
     * Unit: Account currency
     *
     */
    balance: string
    /**
     * The Account's outstanding balance represents the sum of placed and unpaid orders.
     *
     * The outstanding balance is mostly negative.
     *
     * Unit: Account currency
     *
     */
    balanceOutstanding: string
    type: AccountType
    /**
     * Offset link logo URL
     *
     * This is the logo URL that appears on the first screen of the offset links flow.
     *
     */
    logo?: string
    /**
     * Retirement beneficiary
     *
     * This is the name that appears on future retirements that are made in this account.
     * If none is present, the organisation beneficiary will be used instead.
     *
     */
    beneficiary?: string
    /**
     * Bundle mix id tied to the account.
     */
    bundleMixId?: string
}
