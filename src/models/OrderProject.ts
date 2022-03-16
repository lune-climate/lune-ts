/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderProject = {
    /**
     * The project's unique identifier
     */
    project_id: string
    /**
     * The project's name
     */
    project_name: string
    /**
     * The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture
     */
    project_type: string
    /**
     * The project's unique slug
     */
    project_slug: string
    /**
     * Carbon offset purchased (tonnes CO2)
     */
    quantity: string
    /**
     * Project unit price per tonne CO2
     *
     * Unit: order currency
     *
     */
    unit_price: string
    /**
     * Represents the net cost of offsets purchased by the order for this project.
     *
     * Unit: order currency
     *
     */
    offset_cost: string
}
