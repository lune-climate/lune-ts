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
import type { SmartScanEmissionEstimateLineItems } from './SmartScanEmissionEstimateLineItems.js'
import type { SmartScanEstimateRequest } from './SmartScanEstimateRequest.js'

export type SmartScanEmissionEstimate = EmissionEstimateResponse & {
    request: SmartScanEstimateRequest
    lineItems: SmartScanEmissionEstimateLineItems
}
