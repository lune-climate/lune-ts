/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteByQuantity } from './OrderQuoteByQuantity'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate'

export type SingleShippingEmissionEstimate = ShippingLegEmissionEstimate & {
    /**
     * The emission calculation unique identifier
     */
    id: string
    quote: OrderQuoteByQuantity
}
