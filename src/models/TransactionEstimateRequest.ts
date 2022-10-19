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
    /**
     * A name to reference this calculation.
     */
    name?: string
    /**
     * Monetary value of the transaction. This should exclude shipping and taxes.
     */
    value: MonetaryAmount
    /**
     * Merchant from whom the goods or services the purchase was made
     */
    merchant: Merchant
    /**
     * Individual diet. Used to better estimate  food-related purchases.
     */
    diet?: Diet
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
