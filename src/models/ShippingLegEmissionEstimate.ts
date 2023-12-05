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
import type { ConvertedShipment } from './ConvertedShipment.js'
import type { Distance } from './Distance.js'
import type { DistanceCalculationMethod } from './DistanceCalculationMethod.js'
import type { EmissionEstimate } from './EmissionEstimate.js'
import type { EmissionFactor } from './EmissionFactor.js'
import type { NullEnum } from './NullEnum.js'
import type { ShipmentConversionMethod } from './ShipmentConversionMethod.js'

export type ShippingLegEmissionEstimate = EmissionEstimate & {
    distance?: Distance
    adjustedDistance?: AdjustedDistance
    /**
     * The method we used to determine the shipping distance.
     *
     * `null` in case of logistics sites.
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
    /**
     * The shipment after conversion to the emission factor unit (mass to/from TEU).
     *
     * `null` if no conversion was necessary.
     *
     */
    convertedShipment: ConvertedShipment | NullEnum
    /**
     * The method we used to convert the shipment to the emission factor unit.
     *
     * `null` if no conversion was necessary.
     *
     */
    shipmentConversionMethod: ShipmentConversionMethod | NullEnum
    emissionFactor: EmissionFactor
    /**
     * Summary of the methodology used to calculate emissions or any value which is a prerequisite.
     *
     * `imo_unavailable_container_ship_fallback`: the vessel IMO was not found, therefore a generic container ship emission factor has been used.
     *
     */
    methodology: Array<
        | 'imo_unavailable_container_ship_fallback'
        | 'imo_unavailable_container_ship_trade_lane_fallback'
    >
}
