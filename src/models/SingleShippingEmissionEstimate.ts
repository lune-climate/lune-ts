/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstimateQuote } from './EstimateQuote'
import type { ShippingEstimateRequest } from './ShippingEstimateRequest'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate'

export type SingleShippingEmissionEstimate = ShippingLegEmissionEstimate & {
    /**
     * The emission calculation unique identifier
     */
    id: string
    quote: EstimateQuote
    request: ShippingEstimateRequest
}
