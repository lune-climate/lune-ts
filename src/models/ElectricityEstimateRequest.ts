/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElectricityConsumption } from './ElectricityConsumption'

/**
 * Parameters for estimating electricity emissions
 */
export type ElectricityEstimateRequest = {
    consumption: ElectricityConsumption
    /**
     * The three-letter code of the country where the consumption takes place, if applicable.
     *
     * Providing this value will improve the estimation process. If the value is not provided
     * the global average will be used.
     *
     */
    countryCode: string
}
