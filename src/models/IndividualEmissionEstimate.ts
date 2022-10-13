/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { IndividualEstimateRequest } from './IndividualEstimateRequest'

export type IndividualEmissionEstimate = EmissionEstimateResponse & {
    request: IndividualEstimateRequest
}
