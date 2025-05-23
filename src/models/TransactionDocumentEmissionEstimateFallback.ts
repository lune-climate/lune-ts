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
import type { MonetaryAmount } from './MonetaryAmount.js'
import type { NullEnum } from './NullEnum.js'

/**
 * A fallback estimate for a transaction document.
 *
 * This estimate is used when transaction document line items cannot be processed.
 *
 * When one of `line_items` or `fallback` is present, the other is set to `null`.
 *
 */
export type TransactionDocumentEmissionEstimateFallback = {
    emissionFactor: EmissionFactorWithGasEmissions
    /**
     * The transaction document's category
     */
    category: string
    value: MonetaryAmount
    /**
     * The most accurate category matching the search.
     *
     * The emission factor for this term is used to compute the emission estimate.
     *
     */
    categoryMatch: string | null
    /**
     * Populated if semantic search was used to find a match to the category.
     * Indicates confidence in the match from 0 - 2, 0 being most confident.
     *
     */
    categoryMatchScore: number | null
    /**
     * The text embedding model used to support semantic search
     *
     */
    semanticMatchingModel: string | null
    exchangeRate: string | NullEnum
    exchangeRateDate: string | NullEnum
    /**
     * The 3-character country code that has been identified.
     */
    countryCode: string
    dietFactor: string | NullEnum
}
