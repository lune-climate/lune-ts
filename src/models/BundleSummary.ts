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
     * A bundle's image URL
     */
    primaryImage?: string
    /**
     * A bundle's high resolution image URL
     */
    primaryImageHires?: string
    /**
     * The bundle's description
     */
    description?: string
    /**
     * Disabled bundles do not accept orders
     *
     */
    disabled: boolean
    /**
     * Quantity of CO2 offsets available to purchase (in tonnes).
     *
     * If available_quantity is not set, assume there is an unlimited amount of offsets to purchase.
     *
     */
    availableQuantity?: string
    /**
     * Offset type classification
     *
     */
    offsetType?: BundleSummary.offset_type
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
}
