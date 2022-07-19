/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { Mass } from './Mass'
import type { MassUnit } from './MassUnit'

/**
 * Order by Quantity details
 */
export type OrderQuoteByQuantityRequest = {
    /**
     * Mass of CO2 offsets to purchase
     */
    mass: Mass
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
