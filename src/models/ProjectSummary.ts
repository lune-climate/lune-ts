/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Media } from './Media'
import type { Registry } from './Registry'

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
    registryName: Registry
    /**
     * A link to the registry's project details page.
     */
    registryLink: string | null
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
    region: string | null
    /**
     * A project logo image URL
     */
    logo: string | null
    /**
     * A project image URL
     */
    primaryImage: string | null
    /**
     * A project thumbnail image URL
     */
    thumbnailImage: string | null
    /**
     * Project results
     */
    results: Array<string> | null
    /**
     * UN Sustainable Development Goals.
     *
     * Each number in the array represent one UN Sustainable Development Goal. See https://sdgs.un.org/goals.
     *
     */
    unSdg: Array<number> | null
    /**
     * Disabled projects do not get allocated to orders
     *
     */
    disabled: boolean
    /**
     * A list of images and videos belonging to the project.
     */
    media: Array<Media>
}
