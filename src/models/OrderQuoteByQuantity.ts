/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteBase } from './OrderQuoteBase'

export type OrderQuoteByQuantity = OrderQuoteBase & {
    /**
     * Requested quantity for the specific bundle (tonnes CO2).
     *
     * requested_quantity may be returned as part of an emission estimate response, in which case this property contains the equivalent value as the `mass` property.
     *
     */
    requestedQuantity: string
}
