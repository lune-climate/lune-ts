/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBundle } from './OrderBundle'

export type OrderQuoteBase = {
    /**
     * Currency code
     */
    currency: string
    /**
     * Estimated quantity (tonnes CO2).
     *
     * May be lower than `requested_quantity`.
     *
     */
    estimatedQuantity: string
    /**
     * Estimated offset cost
     *
     * Unit: order quote currency
     *
     */
    estimatedOffsetCost: string
    /**
     * Estimated total cost inclusive of Lune fees.
     *
     * Unit: order quote currency
     *
     */
    estimatedTotalCost: string
    /**
     * Estimated commission
     */
    estimatedCommission: string
    /**
     * Bundles included in the quote including quantity and cost breakdown.
     *
     */
    bundles: Array<OrderBundle>
}
