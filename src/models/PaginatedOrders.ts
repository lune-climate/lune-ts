/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedOrders = PaginatedBase & {
    /**
     * Paginated Order objects ordered by creation date descending.
     */
    data: Array<Order>
}
