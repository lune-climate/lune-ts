/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedAccounts = PaginatedBase & {
    /**
     * Paginated Account objects
     */
    data: Array<Account>
}
