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

import type { Distance } from './Distance.js'
import type { DistanceCalculationMethod } from './DistanceCalculationMethod.js'
import type { EmissionEstimate } from './EmissionEstimate.js'
import type { NullEnum } from './NullEnum.js'

export type ShippingLegEmissionEstimate = EmissionEstimate & {
    distance?: Distance
    distanceCalculationMethod: DistanceCalculationMethod | NullEnum
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
