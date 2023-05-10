/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { EmissionFactor } from './EmissionFactor'
import type { EmissionFactorEstimateRequest } from './EmissionFactorEstimateRequest'

export type EmissionFactorEstimate = EmissionEstimateResponse & {
    request: EmissionFactorEstimateRequest
    emissionFactor: EmissionFactor
}
