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
           * A Classification of Individual Consumption According to Purpose
           * (https://en.wikipedia.org/wiki/Classification_of_Individual_Consumption_According_to_Purpose)
           * code indicating the type of goods or services purchased.
           *
           * It is the responsibility of the API user to provide a valid code here. We validate only
           * the top level identifier (the number before the first dot). If an invalid code is provided
           * we fall back to the division-level emission defaults (so for example 14.999999 will fall
           * back to 14).
           *
           */
          coicopCode: string
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
