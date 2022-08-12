/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirportSourceDestination } from './AirportSourceDestination'
import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { CabinClass } from './CabinClass'
import type { Distance } from './Distance'
import type { MassUnit } from './MassUnit'

/**
 * Parameters for estimating emissions for commercial plane travel
 */
export type FlightEstimateRequest = {
    /**
     * Either the flight distance or the start/destination airport code (ICAO or IATA).
     */
    route: Distance | AirportSourceDestination
    cabinClass?: CabinClass
    /**
     * Number of passengers the calculation should be applied to.
     * This parameter defaults to 1.
     */
    passengers?: number
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
