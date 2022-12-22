/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleMass } from './BundleMass'
import type { MassUnit } from './MassUnit'

/**
 * Order by Quantity details
 */
export type OrderQuoteByQuantityWithBundleMass = {
    bundleMasses: Array<BundleMass>
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
