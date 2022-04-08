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
    shortName: string
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
    projectType: string
    /**
     * The project's Verification Standard Entity name or equivalent organization.
     */
    registryName: string
    /**
     * A link to the registry's project details page.
     */
    registryLink?: string
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
    countryName: string
    /**
     * The project's 3 character country code
     */
    countryCode: string
    /**
     * The project's region
     */
    region?: string
    /**
     * A project image URL
     */
    primaryImage?: string
    /**
     * A project thumbnail image URL
     */
    thumbnailImage?: string
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
    unSdg?: Array<number>
    /**
     * Disabled projects do not get allocated to orders
     *
     */
    disabled: boolean
}
