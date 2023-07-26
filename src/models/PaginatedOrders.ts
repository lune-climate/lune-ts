/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedOrders = PaginatedBase & {
    /**
     * An array of Order objects ordered by creation date descending.
     *
     * Part of a paginated response.
     *
     */
    data: Array<Order>
}
