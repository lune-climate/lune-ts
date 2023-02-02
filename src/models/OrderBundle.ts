/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderBundle = {
    /**
     * The bundle's unique identifier
     */
    bundleId: string
    /**
     * The bundle's name
     */
    bundleName: string
    /**
     * A bundle's image URL
     */
    primaryImage?: string
    /**
     * Quantity for the specific bundle (tonnes CO2)
     */
    quantity: string
    /**
     * Bundle unit price per tonne CO2
     *
     * Unit: order currency
     *
     */
    unitPrice: string
    /**
     * Bundle unit price per tonne CO2 inclusive of fees.
     *
     * Unit: order currency
     *
     */
    grossUnitPrice: string
    /**
     * The bundle's net offset cost being purchased.
     *
     * Unit: order currency
     *
     */
    offsetCost: string
    /**
     * If true, there is no inventory necessary to fully satisfy the order for this bundle.
     *
     */
    insufficientAvailableQuantity: boolean | null
}
