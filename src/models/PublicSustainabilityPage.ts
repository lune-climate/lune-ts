/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode'
import type { MonetaryAmountValue } from './MonetaryAmountValue'
import type { SupportedUNSdg } from './SupportedUNSdg'

/**
 * The public sustainability summary page for a given account.
 */
export type PublicSustainabilityPage = {
    /**
     * The sustainability page title format and info.
     */
    title:
        | {
              format: PublicSustainabilityPage.format
              currency: CurrencyCode
              value: MonetaryAmountValue
          }
        | {
              format: PublicSustainabilityPage.format
              /**
               * The total quantity of tCO2 offset by all completed orders.
               */
              quantity: string
          }
    description:
        | (
              | {
                    format: PublicSustainabilityPage.format
                    /**
                     * The number of one-way flights from NYC to London the emissions of which are an equivalent to the CO2 reduction.
                     */
                    flightsNycToLondon: number
                }
              | {
                    format: PublicSustainabilityPage.format
                    /**
                     * The number of supported UN Sustainable Development Goals (SDGs).
                     */
                    numberOfUnSdgs: number
                    /**
                     * The number of supported carbon offset projects.
                     */
                    numberOfProjects: number
                }
              | {
                    format: PublicSustainabilityPage.format
                    /**
                     * The custom description of the sustainability page provided in the configuration.
                     */
                    customDescription: string
                }
          )
        | null
    /**
     * The sustainability page logo URL.
     */
    logo: string | null
    /**
     * The name of the account for which the sustainability page is generated.
     */
    accountName: string
    /**
     * Whether to include the certificates section in the sustainability page.
     */
    includeCertificates: boolean
    /**
     * The sustainability page bundle percentages and details.
     */
    bundles: Array<{
        /**
         * The volume of emissions offset via this bundle as a percentage of all offset emissions.
         */
        percentOfTotal: number
        /**
         * The quantity of tCO2 offset via this bundle.
         */
        quantity: string
        bundle: {
            /**
             * The bundle's name
             */
            name: string
            /**
             * A bundle's background colour in hexadecimal format
             */
            backgroundColour: string | null
            /**
             * A bundle's image URL
             */
            primaryImage: string | null
            /**
             * A bundle's high resolution image URL
             */
            primaryImageHires: string | null
            /**
             * A bundle's small thumbnail image URL
             */
            smallThumbnail: string | null
            /**
             * The bundle's description
             */
            description: string | null
            /**
             * Offset type classification
             *
             */
            offsetType: 'emissions_reduction' | 'carbon_removal' | null
            /**
             * The bundle's carbon storage permanence.
             */
            carbonPermanence: 'long_term' | 'short_term' | 'no_storage'
        }
    }> | null
    unSdg: SupportedUNSdg
}

export namespace PublicSustainabilityPage {
    export enum format {
        BY_PRICE = 'by_price',
    }
}
