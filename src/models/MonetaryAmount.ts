/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode'

export type MonetaryAmount = {
    /**
     * An amount of money (the fractional part is optional)
     */
    value: string
    currency: CurrencyCode
}
