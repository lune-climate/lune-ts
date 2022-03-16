/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectSummary = {
    /**
     * The projects's unique identifier
     */
    id: string
    /**
     * The project's name
     */
    name: string
    /**
     * The project's short name. May coincide with name.
     */
    short_name: string
    /**
     * Project slug
     */
    slug: string
    /**
     * Project description
     */
    description: string
    /**
     * The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture
     */
    project_type: string
    /**
     * The project's Verification Standard Entity name or equivalent organization.
     */
    registry_name: string
    /**
     * A link to the registry's project details page.
     */
    registry_link?: string
    /**
     * Latitude
     */
    latitude: number
    /**
     * Logitude
     */
    longitude: number
    /**
     * The project's country
     */
    country_name: string
    /**
     * The project's 3 character country code
     */
    country_code: string
    /**
     * The project's region
     */
    region?: string
    /**
     * A project image URL
     */
    primary_image?: string
    /**
     * A project thumbnail image URL
     */
    thumbnail_image?: string
    /**
     * Project results
     */
    results?: Array<string>
    /**
     * UN Sustainable Development Goals.
     *
     * Each number in the array represent one UN Sustainable Development Goal. See https://sdgs.un.org/goals.
     *
     */
    un_sdg?: Array<number>
    /**
     * Disabled projects do not get allocated to orders
     *
     */
    disabled: boolean
}
