/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderBundle = {
    /**
     * The bundle's unique identifier
     */
    bundle_id: string
    /**
     * The bundle's name
     */
    bundle_name: string
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
    unit_price: string
    /**
     * Bundle unit price per tonne CO2 inclusive of fees.
     *
     * Unit: order currency
     *
     */
    gross_unit_price: string
    /**
     * Represents the net cost of offsets purchased by the order for this bundle.
     *
     * Unit: order currency
     *
     */
    offset_cost: string
    /**
     * If true, there is no inventory necessary to fully satisfy the order for this bundle.
     *
     */
    insufficient_available_quantity?: boolean
}
