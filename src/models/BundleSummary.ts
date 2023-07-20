/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BundleSummary = {
    /**
     * The bundle's unique identifier
     */
    id: string
    /**
     * The bundle's name
     */
    name: string
    /**
     * Bundle unit price per tonne CO2
     *
     */
    unitPrice: string
    /**
     * Bundle unit price per tonne CO2 inclusive of fees
     *
     */
    grossUnitPrice: string
    /**
     * Currency code
     */
    currency: string
    /**
     * A bundle's background colour in hexadecimal format
     */
    backgroundColour: string | null
    /**
     * A bundle's image URL
     */
    primaryImage: string | null
    /**
     * A bundle's larger image URL
     */
    largeImage?: string | null
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
     * Disabled bundles do not accept orders
     *
     */
    disabled: boolean
    /**
     * Quantity of CO2 offsets available to purchase (in tonnes).
     *
     * If available_quantity is null, assume there is an unlimited amount of offsets to purchase.
     *
     */
    availableQuantity: string | null
    /**
     * Offset type classification
     *
     */
    offsetType: BundleSummary.offset_type | null
    /**
     * Bundle approach
     */
    approach: BundleSummary.approach | null
    /**
     * The bundle's carbon storage permanence.
     */
    carbonPermanence: BundleSummary.carbon_permanence
}

export namespace BundleSummary {
    /**
     * Offset type classification
     *
     */
    export enum offset_type {
        EMISSIONS_REDUCTION = 'emissions_reduction',
        CARBON_REMOVAL = 'carbon_removal',
    }

    /**
     * Bundle approach
     */
    export enum approach {
        TRADITIONAL = 'traditional',
        INNOVATIVE = 'innovative',
    }

    /**
     * The bundle's carbon storage permanence.
     */
    export enum carbon_permanence {
        LONG_TERM = 'long_term',
        SHORT_TERM = 'short_term',
        NO_STORAGE = 'no_storage',
    }
}
