/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedAccounts = PaginatedBase & {
    /**
     * An array of Account objects
     *
     * Part of a paginated response.
     *
     */
    data: Array<Account>
}
