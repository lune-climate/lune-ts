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

import type { EmissionFactorWithGasEmissions } from './EmissionFactorWithGasEmissions.js'
import type { NullEnum } from './NullEnum.js'

export type TransactionEmissionEstimateBaseFields = {
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
    searchTermMatch: string | null
    /**
     * Populated if semantic search was used to find a match to the provided search term or category
     * Indicates confidence in the match from 0 - 2, 0 being most confident.
     *
     */
    searchTermMatchScore: number | null
    dietFactor: string | NullEnum
    /**
     * The text embedding model used to support semantic search
     *
     */
    semanticMatchingModel: string | null
    exchangeRate: string | NullEnum
    exchangeRateDate: string | NullEnum
}
