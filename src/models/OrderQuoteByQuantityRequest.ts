/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { Mass } from './Mass'

/**
 * Order by Quantity details
 */
export type OrderQuoteByQuantityRequest = {
    /**
     * Mass of CO2 offsets to purchase
     */
    mass: Mass
    bundleSelection?: BundleSelectionRequest
}
