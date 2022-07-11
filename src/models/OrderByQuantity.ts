/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByQuantity = OrderBase & {
    /**
     * Requested quantity of CO2 offsets to purchase in tonnes.
     */
    requestedQuantity: string
}
