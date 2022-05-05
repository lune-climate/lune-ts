/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { Shipment } from './Shipment'
import type { ShippingMethod } from './ShippingMethod'
import type { SourceDestination } from './SourceDestination'

/**
 * Parameters for estimating shipping emissions
 */
export type ShippingEstimateRequest = {
    shipment: Shipment
    /**
     * Either the shipping distance or the start/destination address pair.
     *
     * Note that for sea transport the source/destination pair should be as close to
     * locations of existing and well-known ports as possible. Coordinates or addresses
     * that lie far from the shore line or coordinates deep into the sea or ocean will
     * result in inaccurate calculations.
     *
     * When transporting goods over unusual routes or between unusual points it's better
     * to provide us the distance directly to ensure better calculations.
     *
     */
    route: Distance | SourceDestination
    method: ShippingMethod
    /**
     * The three-letter code of the country where the shipping takes place, if applicable.
     *
     * Providing this value will improve the estimation process. If the shipping spans
     * multiple countries you can either make multiple per-country estimations or choose
     * the country with the largest share of the route.
     *
     */
    countryCode?: string
}
