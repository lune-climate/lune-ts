/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { MassUnit } from './MassUnit'
import type { Metadata } from './Metadata'

/**
 * Order by Estimate details
 */
export type CreateOrderByEstimateRequest = {
    /**
     * The emission calculation unique identifier
     */
    estimateId: string
    /**
     * Optional unique identifier provided by the client.
     *
     * `idempotency_key` has two purposes:
     * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
     * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
     *
     */
    idempotencyKey?: string
    bundleSelection?: BundleSelectionRequest
    metadata?: Metadata
    /**
     * This property represents the level of precision used to truncate quantities assigned to each bundle.
     *
     */
    quantityTrunc?: MassUnit
}
