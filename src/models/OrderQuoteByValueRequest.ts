/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'

/**
 * Order by Value details
 */
export type OrderQuoteByValueRequest = {
    /**
     * Maximum price of CO2 offsets to purchase (in the account's currency)
     */
    value: string
    bundle_selection?: BundleSelectionRequest
}
