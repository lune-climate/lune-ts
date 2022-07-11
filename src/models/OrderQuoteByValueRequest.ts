/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { MassUnit } from './MassUnit'

export type OrderQuoteByValueRequest = {
    /**
     * Maximum price of CO2 offsets to purchase (in the account's currency)
     */
    value: string
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
