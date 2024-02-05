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
import type { Mass } from './Mass.js'
import type { Metadata } from './Metadata.js'

/**
 * An emission estimate result. The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
 */
export type EmissionEstimate = {
    mass: Mass
    metadata?: Metadata
    idempotencyKey?: EstimateIdempotencyKey
}
