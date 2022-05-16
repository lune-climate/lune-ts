/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Shipment } from './Shipment'
import type { ShippingCountryCode } from './ShippingCountryCode'
import type { ShippingMethod } from './ShippingMethod'
import type { ShippingRoute } from './ShippingRoute'

/**
 * Parameters for estimating shipping emissions
 */
export type MultiLegShippingEstimateRequest = {
    shipment: Shipment
    legs: Array<{
        route: ShippingRoute
        method: ShippingMethod
        countryCode?: ShippingCountryCode
    }>
}
