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
    unit_price: string
    /**
     * Bundle unit price per tonne CO2 inclusive of fees
     *
     */
    gross_unit_price: string
    /**
     * Currency code
     */
    currency: string
    /**
     * A bundle's image URL
     */
    primary_image?: string
    /**
     * A bundle's high resolution image URL
     */
    primary_image_hires?: string
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
    available_quantity?: string
    /**
     * Offset type classification
     *
     */
    offset_type?: 'emissions_reduction' | 'carbon_removal'
}
