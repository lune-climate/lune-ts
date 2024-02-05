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
import type { BundleSelectionRequest } from './BundleSelectionRequest.js'
import type { CabinClass } from './CabinClass.js'
import type { Distance } from './Distance.js'
import type { MassUnit } from './MassUnit.js'
import type { Metadata } from './Metadata.js'

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
    /**
     * A name used to reference this calculation.
     */
    name?: string
    metadata?: Metadata
}
