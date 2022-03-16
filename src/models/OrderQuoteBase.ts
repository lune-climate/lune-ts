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
    estimated_quantity: string
    /**
     * Estimated offset cost
     *
     * Unit: order quote currency
     *
     */
    estimated_offset_cost: string
    /**
     * Estimated total cost inclusive of Lune fees.
     *
     * Unit: order quote currency
     *
     */
    estimated_total_cost: string
    /**
     * Estimated commission
     */
    estimated_commission: string
    /**
     * Bundles included in the quote including quantity and cost breakdown.
     *
     */
    bundles: Array<OrderBundle>
}
