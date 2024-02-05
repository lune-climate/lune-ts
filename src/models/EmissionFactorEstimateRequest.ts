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
import type { EmissionFactorActivity } from './EmissionFactorActivity.js'
import type { EstimateIdempotencyKey } from './EstimateIdempotencyKey.js'
import type { MassUnit } from './MassUnit.js'
import type { Metadata } from './Metadata.js'

export type EmissionFactorEstimateRequest = {
    /**
     * The emission factor unique identifier
     */
    emissionFactorId: string
    /**
     * A measure of the activity being estimated
     */
    activity: EmissionFactorActivity
    /**
     * A name to reference this calculation.
     */
    name?: string
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
    metadata?: Metadata
    idempotencyKey?: EstimateIdempotencyKey
}
