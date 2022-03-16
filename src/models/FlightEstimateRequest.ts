/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirportSourceDestination } from './AirportSourceDestination'
import type { CabinClass } from './CabinClass'
import type { Distance } from './Distance'

/**
 * Parameters for estimating emissions for commercial plane travel
 */
export type FlightEstimateRequest = {
    /**
     * Either the flying distance or the start/destination airport code (ICAO or IATA).
     */
    route: Distance | AirportSourceDestination
    cabin_class?: CabinClass
    /**
     * Number of passengers the calculation should be applied to.
     * This parameter defaults to 1.
     */
    passengers?: number
}
