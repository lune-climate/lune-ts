/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByEstimate = OrderBase & {
    /**
     * The emission calculation unique identifier
     */
    estimateId: string
    /**
     * Requested value of CO2 offsets to purchase in the account's currency.
     */
    requestedValue: string | null
    /**
     * Requested quantity of CO2 offsets to purchase in tonnes.
     */
    requestedQuantity: string | null
}
