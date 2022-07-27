/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Media } from './Media'

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
    registryName: ProjectSummary.registry_name
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
     * A project logo image URL
     */
    logo?: string
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
    /**
     * A list of images and videos belonging to the project.
     */
    media?: Array<Media>
}

export namespace ProjectSummary {
    /**
     * The project's Verification Standard Entity name or equivalent organization.
     */
    export enum registry_name {
        AMERICAN_CARBON_REGISTRY = 'American Carbon Registry',
        VERRA = 'Verra',
        PURO_EARTH = 'Puro.Earth',
        GOLD_STANDARD = 'Gold Standard',
        CLIMATE_ACTION_RESERVE = 'Climate Action Reserve',
        WOODLAND_CARBON_CODE = 'Woodland Carbon Code',
        '' = '',
    }
}
