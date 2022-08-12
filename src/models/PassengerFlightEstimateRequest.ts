/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirportSourceDestination } from './AirportSourceDestination'
import type { CabinClass } from './CabinClass'
import type { Distance } from './Distance'

/**
 * Parameters for estimating emissions for commercial plane travel
 */
export type PassengerFlightEstimateRequest = {
    /**
     * Either the flight distance or the start/destination airport code (ICAO or IATA).
     */
    route: Distance | AirportSourceDestination
    cabinClass: CabinClass
}
