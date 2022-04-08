/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByQuantity = OrderBase & {
    /**
     * Represents the requested quantity of CO2 offsets to purchase in tonnes.
     */
    requestedQuantity: string
}
