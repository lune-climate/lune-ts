/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientAccount } from './ClientAccount'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedClientAccounts = PaginatedBase & {
    /**
     * Paginated Client Account objects
     */
    data: Array<ClientAccount>
}
