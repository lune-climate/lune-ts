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

import type { EstimateIdempotencyKey } from './EstimateIdempotencyKey.js'
import type { Metadata } from './Metadata.js'
import type { ShippedAt } from './ShippedAt.js'

export type UpdateShippingEstimateAnnotationsRequest =
    | {
          /**
           * When true, the emission estimate refers to an actual shipment of goods, will be included in Lune analytics and can be included in any CO2 emissions reporting.
           *
           * This property exists to distinguish booking quotes or forecasts from actual shipments where goods are moved.
           *
           * You can mark an estimate as shipment at any time.
           *
           */
          isShipment: boolean
          shippedAt?: ShippedAt
          metadata?: Metadata
          idempotencyKey?: EstimateIdempotencyKey
      }
    | {
          shippedAt: ShippedAt
          metadata?: Metadata
          idempotencyKey?: EstimateIdempotencyKey
      }
    | {
          metadata: Metadata
          idempotencyKey?: EstimateIdempotencyKey
      }
    | {
          idempotencyKey: EstimateIdempotencyKey
      }