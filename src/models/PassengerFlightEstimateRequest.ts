// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirportSourceDestination } from './AirportSourceDestination.js'
import type { CabinClass } from './CabinClass.js'
import type { Distance } from './Distance.js'
import type { SourceDestination } from './SourceDestination.js'

/**
 * Parameters for estimating emissions for commercial plane travel
 */
export type PassengerFlightEstimateRequest = {
    /**
     * Either the flight distance or the start/destination airport code (ICAO or IATA).
     */
    route: Distance | AirportSourceDestination | SourceDestination
    cabinClass: CabinClass
}
