/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode'
import type { MonetaryAmountValue } from './MonetaryAmountValue'

export type MonetaryAmount = {
    value: MonetaryAmountValue
    currency: CurrencyCode
}
