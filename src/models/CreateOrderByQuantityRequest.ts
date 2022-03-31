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
     * `idempotencyKey` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotencyKey` to reconcile orders with other entities on their system.
     *
     */
    idempotencyKey: string
    bundleSelection: BundleSelectionRequest
    metadata?: Metadata
}
