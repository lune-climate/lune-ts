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
     * Account-unique identifier provided by the client.
     *
     * `idempotency_key` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
     *
     */
    idempotencyKey: string | null
    /**
     * Identifies whether the order has been placed by quantity (kg CO2) or value (monetary amount)
     */
    type: OrderBase.type
    /**
     * Order status
     */
    status: OrderBase.status
    /**
     * Order currency code
     */
    currency: string
    /**
     * The net offset cost being purchased. May be lower than `requested_value`.
     *
     * This property is set when bundles are assigned to the order.
     * Unit: order currency
     *
     */
    offsetCost: string | null
    /**
     * The total cost for the order inclusive of fees.
     *
     * Unit: order currency
     *
     */
    totalCost: string | null
    /**
     * Lune's fee.
     *
     * This property is set when bundles are assigned to the order.
     * Unit: order currency
     *
     */
    commission: string | null
    /**
     * Quantity of CO2 offsets purchased in tonnes.
     */
    quantity: string | null
    /**
     * Order creation timestamp
     */
    createdAt: string
    /**
     * bundles are set when the order's status is `placed`, `paid`, `retiring` or `complete`.
     *
     * The bundles associated with the order including their relative quantity and cost breakdown.
     *
     */
    bundles: Array<OrderBundle> | null
    /**
     * Projects are set when the order's status is `retiring` or `complete`.
     *
     * The projects associated with the order including their relative quantity and cost breakdown.
     *
     * Orders are placed against bundles, not projects. Projects in a bundle may change based on supply.
     *
     * This property is set as soon as we can guarantee project supply.
     *
     */
    projects: Array<OrderProject> | null
    /**
     * Carbon credits certificate URL.
     *
     * This property is set when an order has state 'complete'
     *
     */
    certificate: string | null
    metadata: Metadata
    /**
     * The offset link identifier, if the order was placed through an offset link
     */
    offsetLinkId: string | null
    /**
     * End-user email.
     *
     * This property is currently populated on orders placed through offset links.
     *
     */
    email: string | null
}

export namespace OrderBase {
    /**
     * Identifies whether the order has been placed by quantity (kg CO2) or value (monetary amount)
     */
    export enum type {
        QUANTITY = 'quantity',
        VALUE = 'value',
    }

    /**
     * Order status
     */
    export enum status {
        RECEIVED = 'received',
        PLACED = 'placed',
        PAID = 'paid',
        RETIRING = 'retiring',
        CANCELLED = 'cancelled',
        COMPLETE = 'complete',
        FAILED = 'failed',
    }
}
