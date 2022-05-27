/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { ElectricityConsumption } from './ElectricityConsumption'
import type { MassUnit } from './MassUnit'

/**
 * Parameters for estimating electricity emissions
 */
export type ElectricityEstimateRequest = {
    consumption: ElectricityConsumption
    /**
     * The three-letter code of the country where the consumption takes place, if applicable.
     *
     * Providing this value will improve the estimation process. If the value is not provided
     * the global average will be used.
     *
     */
    countryCode?: string
    bundleSelection?: BundleSelectionRequest
    /**
     * This property represents the level of precision used to truncate quantities assigned to each bundle.
     *
     */
    quantityTrunc?: MassUnit
}
