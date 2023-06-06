/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { EmissionEstimate } from './EmissionEstimate'

export type ShippingLegEmissionEstimate = EmissionEstimate & {
    distance?: Distance
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
