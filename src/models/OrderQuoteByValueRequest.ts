/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { MassUnit } from './MassUnit'

/**
 * Order by Value details
 */
export type OrderQuoteByValueRequest = {
    /**
     * Maximum price of CO2 offsets to purchase (in the account's currency)
     */
    value: string
    bundleSelection?: BundleSelectionRequest
    /**
     * This property represents the level of precision used to truncate quantities assigned to each bundle.
     *
     */
    quantityTrunc?: MassUnit
}
