/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteByQuantity } from './OrderQuoteByQuantity'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate'

export type SingleShippingEmissionEstimate = ShippingLegEmissionEstimate & {
    quote: OrderQuoteByQuantity
}
