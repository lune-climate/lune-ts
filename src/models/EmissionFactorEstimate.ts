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

import type { EmissionEstimateResponse } from './EmissionEstimateResponse.js'
import type { EmissionFactorEstimateRequest } from './EmissionFactorEstimateRequest.js'
import type { EmissionFactorWithGasEmissions } from './EmissionFactorWithGasEmissions.js'

export type EmissionFactorEstimate = EmissionEstimateResponse & {
    request: EmissionFactorEstimateRequest
    emissionFactor: EmissionFactorWithGasEmissions
}
