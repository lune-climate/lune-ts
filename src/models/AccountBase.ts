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
    type: AccountType
    /**
     * The account logo
     */
    logo: string | null
    /**
     * Retirement beneficiary
     *
     * This is the name that appears on future retirements that are made in this account.
     * If none is present, the organisation beneficiary will be used instead.
     *
     */
    beneficiary: string | null
    /**
     * Bundle portfolio id tied to the account.
     */
    bundlePortfolioId: string | null
}
