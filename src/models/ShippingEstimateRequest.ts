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
    country_code?: string
}
