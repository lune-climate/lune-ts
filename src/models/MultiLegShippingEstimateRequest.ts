/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { MassUnit } from './MassUnit'
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
    bundleSelection?: BundleSelectionRequest
    /**
     * This property represents the level of precision used to truncate quantities assigned to each bundle.
     *
     */
    quantityTrunc?: MassUnit
}
