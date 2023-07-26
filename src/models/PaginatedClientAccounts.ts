/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientAccount } from './ClientAccount'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedClientAccounts = PaginatedBase & {
    /**
     * An array of Client Account objects
     *
     * Part of a paginated response.
     *
     */
    data: Array<ClientAccount>
}
