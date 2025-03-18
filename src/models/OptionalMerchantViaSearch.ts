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

export type OptionalMerchantViaSearch =
    | {
          /**
           * A category the transaction belongs to.
           */
          category: string
      }
    | {
          /**
           * A list of categories the transaction belongs to.
           *
           * From most specific to most general.
           *
           */
          categoryHierarchy?: Array<string>
      }
    | {
          /**
           * The name of the merchant.
           */
          name?: string
          /**
           * The three-letter code of the merchant's country.
           */
          countryCode?: string
          /**
           * The search term to query.
           * Search is resolved using a combination of semantic and keyword searching.
           *
           */
          searchTerm?: string
      }
