/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { TransactionEstimateRequest } from './TransactionEstimateRequest'

export type TransactionEmissionEstimate = EmissionEstimateResponse & {
    request: TransactionEstimateRequest
    /**
     * The most accurate term matching the search.
     *
     * The emission factor for this term is used to compute the emission estimate.
     *
     */
    searchTermMatch?: string
}
