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
     * URL to the project's logo
     */
    projectLogo?: string
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
     * The net offset cost being purchased.
     *
     * Unit: order currency
     *
     */
    offsetCost: string
    /**
     * Describes whether credits for a project have been allocated to an order or retired
     *
     */
    status: OrderProject.status
}

export namespace OrderProject {
    /**
     * Describes whether credits for a project have been allocated to an order or retired
     *
     */
    export enum status {
        ALLOCATED = 'allocated',
        RETIRED = 'retired',
    }
}
