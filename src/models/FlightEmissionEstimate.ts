/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { FlightEstimateRequest } from './FlightEstimateRequest'

export type FlightEmissionEstimate = EmissionEstimateResponse & {
    request: FlightEstimateRequest
}
