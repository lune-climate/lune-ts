/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Metadata } from './Metadata'
import type { OrderBundle } from './OrderBundle'
import type { OrderProject } from './OrderProject'

/**
 * Order object
 */
export type OrderBase = {
    /**
     * The order's unique identifier
     */
    id: string
    /**
     * Optional unique identifier provided by the client.
     *
     * `idempotency_key` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
     *
     */
    idempotency_key?: string
    /**
     * Identifies whether the order has been placed by quantity (kg CO2) or value (monetary amount)
     */
    type: 'quantity' | 'value'
    /**
     * Order status
     */
    status: 'received' | 'placed' | 'paid' | 'allocated' | 'cancelled' | 'complete' | 'failed'
    /**
     * Order currency code
     */
    currency: string
    /**
     * Represents the net cost of offsets purchased by the order. May be lower than `requested_value`.
     *
     * This field is set when the order is linked to Bundles.
     *
     * This field is set the order's status transitions from `received` to `placed`.
     *
     * Unit: order currency
     *
     */
    offset_cost?: string
    /**
     * The total cost for the order inclusive of fees.
     *
     * Unit: order currency
     *
     */
    total_cost?: string
    /**
     * Represents Lune's fee.
     *
     * This field is set when the order is linked to Bundles.
     *
     * This field is set the order's status transitions from `received` to `placed`.
     *
     * Unit: order currency
     *
     */
    commission?: string
    /**
     * Quantity of CO2 offsets purchased in tonnes.
     */
    quantity?: string
    /**
     * Order creation timestamp
     */
    created_at: string
    /**
     * bundles are set when the order's status is `placed`, `paid`, `allocated` or `complete`.
     *
     * Represents the bundles associated with the order including their relative quantity and cost breakdown.
     *
     */
    bundles?: Array<OrderBundle>
    /**
     * Projects are set when the order's status is `allocated` or `complete`.
     *
     * Represents the projects associated with the order including their relative quantity and cost breakdown.
     *
     * Orders are placed against bundles, not projects. Projects in a bundle may change based on supply.
     *
     * This field is set as soon as we can guarantee project supply.
     *
     */
    projects?: Array<OrderProject>
    /**
     * Carbon credits certificate URL.
     *
     * This field is set when an order in 'complete' status
     *
     */
    certificate?: string
    metadata: Metadata
    /**
     * The offset link identifier, if the order was placed through an offset link
     */
    offset_link_id?: string
    /**
     * End-user email.
     *
     * This field is currently populated on orders placed through offset links.
     *
     */
    email?: string
}
