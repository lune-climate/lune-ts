/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleMass } from './BundleMass'
import type { MassUnit } from './MassUnit'

/**
 * Order by Quantity details
 */
export type OrderQuoteByQuantityWithBundleMass = {
    /**
     * An array of `{ bundle_id, mass }` objects.
     *
     * Populate the array to purchase carbon credits, belonging to multiple bundles, by quantity, eg 20 tCO₂.
     *
     */
    bundleMasses: Array<BundleMass>
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
