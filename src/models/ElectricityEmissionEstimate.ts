/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElectricityEstimateRequest } from './ElectricityEstimateRequest'
import type { EmissionEstimateResponse } from './EmissionEstimateResponse'

export type ElectricityEmissionEstimate = EmissionEstimateResponse & {
    request: ElectricityEstimateRequest
}
