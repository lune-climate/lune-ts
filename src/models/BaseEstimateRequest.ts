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
import type { EstimateIdempotencyKey } from './EstimateIdempotencyKey.js'
import type { Metadata } from './Metadata.js'
import type { QuantityTrunc } from './QuantityTrunc.js'

/**
 * Base parameters for estimating emissions.
 */
export type BaseEstimateRequest = {
    /**
     * A name to reference this calculation.
     */
    name?: string
    bundleSelection?: BundleSelectionRequest
    quantityTrunc?: QuantityTrunc
    metadata?: Metadata
    idempotencyKey?: EstimateIdempotencyKey
}
