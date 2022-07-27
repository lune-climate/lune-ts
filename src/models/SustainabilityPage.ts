/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SustainabilityPageSection } from './SustainabilityPageSection'

export type SustainabilityPage = {
    /**
     * The sustainability page status which determines whether it is visible to the public.
     */
    status: SustainabilityPage.status
    /**
     * The sustainability page slug. The slug is used to identify the page publicly and should be unique.
     */
    slug: string
    /**
     * The sustainability page title stat format.
     */
    title: SustainabilityPage.title
    /**
     * The sustainability page description format consisting of stat equivalents or a custom description.
     */
    description?: SustainabilityPage.description
    /**
     * The sustainability page custom description. Only displayed when `description` is set to `by_custom_description`.
     */
    customDescription?: string
    /**
     * The sustainability page sections that will be displayed in the page. Only a single instance of each section type is allowed and the order is irrelevant.
     */
    sections: Array<SustainabilityPageSection>
}

export namespace SustainabilityPage {
    /**
     * The sustainability page status which determines whether it is visible to the public.
     */
    export enum status {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
    }

    /**
     * The sustainability page title stat format.
     */
    export enum title {
        BY_VOLUME = 'by_volume',
        BY_PRICE = 'by_price',
    }

    /**
     * The sustainability page description format consisting of stat equivalents or a custom description.
     */
    export enum description {
        BY_EQUIVALENT = 'by_equivalent',
        BY_SUPPORTED_GOALS = 'by_supported_goals',
        BY_CUSTOM_DESCRIPTION = 'by_custom_description',
    }
}
