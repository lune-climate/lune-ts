/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { SourceDestination } from './SourceDestination'

/**
 * Parameters for estimating emissions for a passenger train
 */
export type PassengerRailEstimateRequest = {
    /**
     * Either the flight distance or the start/destination address or source and destination
     */
    route: Distance | SourceDestination
    railType: PassengerRailEstimateRequest.rail_type
}

export namespace PassengerRailEstimateRequest {
    export enum rail_type {
        NATIONAL_RAIL = 'national_rail',
        INTERNATIONAL_RAIL = 'international_rail',
        LIGHT_RAIL_OR_TRAM = 'light_rail_or_tram',
    }
}
