/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderProject = {
    /**
     * The project's unique identifier
     */
    projectId: string
    /**
     * The project's name
     */
    projectName: string
    /**
     * The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture
     */
    projectType: string
    /**
     * The project's unique slug
     */
    projectSlug: string
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
    unitPrice: string
    /**
     * Represents the net cost of offsets purchased by the order for this project.
     *
     * Unit: order currency
     *
     */
    offsetCost: string
}
