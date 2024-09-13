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

export type Merchant =
    | {
          /**
           * The name of the merchant.
           */
          name?: string
          /**
           * The three-letter code of the merchant's country.
           */
          countryCode: string
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
           * The name of the merchant.
           */
          name?: string
          /**
           * The three-letter code of the merchant's country.
           */
          countryCode: string
          /**
           * The search term to query.
           * Search is resolved using a combination of semantic and keyword searching.
           *
           */
          searchTerm: string
      }
