/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimate } from './EmissionEstimate'
import type { OrderQuoteByQuantity } from './OrderQuoteByQuantity'

/**
 * An emission estimate result including a quote
 */
export type EmissionEstimateResponse = EmissionEstimate & {
    quote: OrderQuoteByQuantity
}
