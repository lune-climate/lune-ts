/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByValue = OrderBase & {
    /**
     * Represents the requested value of CO2 offsets to purchase.
     *
     * Unit: order currency
     *
     */
    requested_value: string
}
