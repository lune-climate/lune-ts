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

import type { AdjustedDistance } from './AdjustedDistance.js'
import type { CalculatedRoute } from './CalculatedRoute.js'
import type { Distance } from './Distance.js'
import type { DistanceCalculationDetails } from './DistanceCalculationDetails.js'
import type { DistanceCalculationMethod } from './DistanceCalculationMethod.js'
import type { EmissionEstimate } from './EmissionEstimate.js'
import type { EmissionFactorWithGasEmissions } from './EmissionFactorWithGasEmissions.js'
import type { MethodologyDetails } from './MethodologyDetails.js'
import type { NullEnum } from './NullEnum.js'
import type { VesselInferenceMethod } from './VesselInferenceMethod.js'

export type BaseShippingLegEmissionEstimate = EmissionEstimate & {
    /**
     * The method we used to infer a vessel from client provided input.
     *
     * `null` when vessel identifier provided by client or no vessel inference not relevant to estimation.
     *
     */
    vesselInferenceDetails?: VesselInferenceMethod | NullEnum
    distance?: Distance
    adjustedDistance?: AdjustedDistance
    /**
     * The method we used to determine the shipping distance.
     *
     * `null` in case of logistics sites or when resolved_legs is set.
     *
     */
    distanceCalculationMethod: DistanceCalculationMethod | NullEnum
    /**
     * The shipping route.
     *
     * `null` in case of logistics sites and situations where the concept of
     * a route doesn't make sense or we're unable to return the route. That
     * includes the following situations at the moment:
     *
     * * Routes where source or destination is an address (or both are).
     * * Most land and inland waterways routes.
     * * The actual distance value was provided by the user.
     * * The emission estimate was created before 2023-09-22.
     *
     */
    route: CalculatedRoute | NullEnum
    emissionFactor: EmissionFactorWithGasEmissions
    /**
     * Summary of the methodology used to calculate emissions or any value which is a prerequisite.
     *
     * `imo_unavailable_container_ship_fallback`: the vessel IMO was not found, therefore a generic container ship emission factor has been used.
     * `flight_number_unavailable_fallback`: the flight number could not be found or the aircraft is currently not supported, therefore a generic plane method has been used.
     *
     */
    methodology: Array<
        | 'imo_unavailable_container_ship_fallback'
        | 'imo_unavailable_container_ship_trade_lane_fallback'
        | 'flight_number_unavailable_fallback'
    >
    /**
     * Information regarding why an alternative distance calculation method was used.
     * `null` in case several resolved legs are presented.
     *
     */
    distanceCalculationDetails: DistanceCalculationDetails | NullEnum
    methodologyDetails: MethodologyDetails | NullEnum
}
