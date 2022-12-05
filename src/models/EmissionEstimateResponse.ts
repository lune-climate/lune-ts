/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimate } from './EmissionEstimate'
import type { EstimateQuote } from './EstimateQuote'

/**
 * An emission estimate result including a quote
 */
export type EmissionEstimateResponse = EmissionEstimate & {
    /**
     * The emission calculation unique identifier
     */
    id: string
    quote: EstimateQuote
}
