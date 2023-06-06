/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { LogisticsSiteMethod } from './LogisticsSiteMethod'
import type { MassUnit } from './MassUnit'
import type { Shipment } from './Shipment'
import type { ShippingCountryCode } from './ShippingCountryCode'
import type { ShippingMethod } from './ShippingMethod'
import type { ShippingRoute } from './ShippingRoute'

/**
 * Parameters for estimating shipping emissions
 */
export type ShippingEstimateRequest = {
    shipment: Shipment
    /**
     * A name to reference this calculation.
     */
    name?: string
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
} & (
    | {
          route: ShippingRoute
          method: ShippingMethod
          countryCode?: ShippingCountryCode
      }
    | {
          method: LogisticsSiteMethod
      }
)
