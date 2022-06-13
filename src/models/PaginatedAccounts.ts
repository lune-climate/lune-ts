/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginatedBase } from './PaginatedBase'
import type { StandardAccount } from './StandardAccount'

export type PaginatedAccounts = PaginatedBase & {
    /**
     * Paginated Account objects
     */
    data: Array<StandardAccount>
}
