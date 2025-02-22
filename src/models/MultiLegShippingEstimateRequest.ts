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

import type { BundleSelectionRequest } from './BundleSelectionRequest.js'
import type { EstimateClientAccountRequest } from './EstimateClientAccountRequest.js'
import type { EstimateIdempotencyKey } from './EstimateIdempotencyKey.js'
import type { LogisticsSiteMethod } from './LogisticsSiteMethod.js'
import type { Metadata } from './Metadata.js'
import type { QuantityTrunc } from './QuantityTrunc.js'
import type { Shipment } from './Shipment.js'
import type { ShippedAt } from './ShippedAt.js'
import type { ShippingCountryCode } from './ShippingCountryCode.js'
import type { ShippingMethod } from './ShippingMethod.js'
import type { ShippingRoute } from './ShippingRoute.js'

/**
 * Parameters for estimating multi-leg shipping emissions
 */
export type MultiLegShippingEstimateRequest = {
    shipment: Shipment
    /**
     * An array representing all the legs of a shipment.
     */
    legs: Array<
        | {
              route: ShippingRoute
              method: ShippingMethod
              countryCode?: ShippingCountryCode
          }
        | {
              method: LogisticsSiteMethod
          }
    >
    /**
     * A name to reference this calculation.
     */
    name?: string
    bundleSelection?: BundleSelectionRequest
    quantityTrunc?: QuantityTrunc
    /**
     * When true, the emission estimate refers to an actual shipment of goods, will be included in Lune analytics and can be included in any CO2 emissions reporting.
     *
     * This property exists to distinguish booking quotes or forecasts from actual shipments where goods are moved.
     *
     * You can mark an estimate as shipment at any time.
     *
     */
    isShipment?: boolean
    shippedAt?: ShippedAt
    metadata?: Metadata
    idempotencyKey?: EstimateIdempotencyKey
    clientAccount?: EstimateClientAccountRequest
}
