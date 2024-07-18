// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimateResponse } from './EmissionEstimateResponse.js'
import type { EmissionFactorWithGasEmissions } from './EmissionFactorWithGasEmissions.js'
import type { NullEnum } from './NullEnum.js'
import type { TransactionEstimateRequest } from './TransactionEstimateRequest.js'
import type { TransactionProcessedAt } from './TransactionProcessedAt.js'

export type TransactionEmissionEstimate = EmissionEstimateResponse & {
    request: TransactionEstimateRequest
    /**
     * This property is `null` for any estimate created before 01/03/2024
     */
    emissionFactor: EmissionFactorWithGasEmissions | NullEnum
    /**
     * The most accurate term matching the search.
     *
     * The emission factor for this term is used to compute the emission estimate.
     *
     */
    searchTermMatch?: string
    dietFactor: string | NullEnum
    exchangeRate: string | NullEnum
    exchangeRateDate: string | NullEnum
    isTransaction: boolean | NullEnum
    transactionProcessedAt: TransactionProcessedAt | NullEnum
}
