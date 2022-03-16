/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { Mass } from './Mass'
import type { Metadata } from './Metadata'

/**
 * Order by Quantity details
 */
export type CreateOrderByQuantityRequest = {
    /**
     * Mass of CO2 offsets to purchase
     */
    mass: Mass
    /**
     * Optional unique identifier provided by the client.
     *
     * `idempotency_key` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
     *
     */
    idempotency_key?: string
    bundle_selection?: BundleSelectionRequest
    metadata?: Metadata
}
