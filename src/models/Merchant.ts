/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Merchant = {
    /**
     * The name of the merchant.
     */
    name?: string
    /**
     * The three-letter code of the merchant's country.
     */
    countryCode: string
} & (
    | {
          /**
           * An ISO 18245 Merchant Category Code (leading zeros need to be preserved) corresponding
           * to the transaction.
           *
           * See https://github.com/greggles/mcc-codes for available codes.
           *
           */
          categoryCode: string
      }
    | {
          /**
           * The search term to query.
           *
           * Search is resolved using fuzzy matching.
           *
           */
          fuzzySearchTerm: string
      }
)
