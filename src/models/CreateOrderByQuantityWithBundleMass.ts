/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleMass } from './BundleMass'
import type { MassUnit } from './MassUnit'
import type { Metadata } from './Metadata'

/**
 * Order by Quantity details
 */
export type CreateOrderByQuantityWithBundleMass = {
    /**
     * An array of `{ bundle_id, mass }` objects.
     *
     * Populate the array to purchase carbon credits, belonging to multiple bundles, by quantity, eg 20 tCO₂.
     *
     */
    bundleMasses: Array<BundleMass>
    /**
     * Account-unique identifier provided by the client.
     *
     * `idempotency_key` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
     *
     */
    idempotencyKey?: string
    metadata?: Metadata
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
