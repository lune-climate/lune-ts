/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByValue = OrderBase & {
    /**
     * Requested value of CO2 offsets to purchase in the account's currency.
     */
    requestedValue: string
}
