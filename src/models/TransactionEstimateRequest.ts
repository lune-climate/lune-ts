/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Diet } from './Diet'
import type { Merchant } from './Merchant'
import type { MonetaryAmount } from './MonetaryAmount'

/**
 * Parameters for estimating emissions associated with purchasing goods or services.
 */
export type TransactionEstimateRequest = {
    value: MonetaryAmount
    merchant: Merchant
    diet?: Diet
}
