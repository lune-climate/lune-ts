/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { MassUnit } from './MassUnit'
import type { PassengerFlightEstimateRequest } from './PassengerFlightEstimateRequest'
import type { PassengerRailEstimateRequest } from './PassengerRailEstimateRequest'
import type { PassengerRoadEstimateRequest } from './PassengerRoadEstimateRequest'

/**
 * Parameters for estimating emissions for passenger transportation
 */
export type PassengerTransportationEstimateRequest = {
    /**
     * Number of passengers the calculation should be applied to.
     */
    passengers?: number
    legs: Array<
        PassengerRoadEstimateRequest | PassengerRailEstimateRequest | PassengerFlightEstimateRequest
    >
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
    /**
     * A name to reference this calculation.
     */
    name?: string
}
