/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { Diet } from './Diet'
import type { MassUnit } from './MassUnit'
import type { Merchant } from './Merchant'
import type { MonetaryAmount } from './MonetaryAmount'

/**
 * Parameters for estimating emissions associated with purchasing goods or services.
 */
export type TransactionEstimateRequest = {
    value: MonetaryAmount
    merchant: Merchant
    diet?: Diet
    bundleSelection?: BundleSelectionRequest
    /**
     * This property represents the level of precision used to truncate quantities assigned to each bundle.
     *
     */
    quantityTrunc?: MassUnit
}
