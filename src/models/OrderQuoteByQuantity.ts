/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteBase } from './OrderQuoteBase'

export type OrderQuoteByQuantity = OrderQuoteBase & {
    /**
     * Requested quantity for the specific bundle (tonnes CO2)
     */
    requestedQuantity: string
}
