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
import type { Distance } from './Distance.js'
import type { SourceDestination } from './SourceDestination.js'

/**
 * Parameters for estimating emissions for a passenger train
 */
export type PassengerRailEstimateRequest = {
    /**
     * Either the flight distance or the start/destination address or source and destination
     */
    route: Distance | SourceDestination | AirportSourceDestination
    railType: PassengerRailEstimateRequest.rail_type
}

export namespace PassengerRailEstimateRequest {
    export enum rail_type {
        NATIONAL_RAIL = 'national_rail',
        INTERNATIONAL_RAIL = 'international_rail',
        LIGHT_RAIL_OR_TRAM = 'light_rail_or_tram',
    }
}
