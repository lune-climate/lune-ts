/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteBase } from './OrderQuoteBase'

export type OrderQuoteByValue = OrderQuoteBase & {
    /**
     * Requested order value inclusive of commission
     */
    requestedValue: string
}
