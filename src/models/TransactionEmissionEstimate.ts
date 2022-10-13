/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { TransactionEstimateRequest } from './TransactionEstimateRequest'

export type TransactionEmissionEstimate = EmissionEstimateResponse & {
    request: TransactionEstimateRequest
}
