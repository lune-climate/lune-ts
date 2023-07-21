/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NullEnum } from './NullEnum'
import type { SustainabilityPageCustomDescription } from './SustainabilityPageCustomDescription'
import type { SustainabilityPageDescription } from './SustainabilityPageDescription'
import type { SustainabilityPageSections } from './SustainabilityPageSections'
import type { SustainabilityPageSlug } from './SustainabilityPageSlug'
import type { SustainabilityPageStatus } from './SustainabilityPageStatus'
import type { SustainabilityPageTitle } from './SustainabilityPageTitle'

/**
 * A Sustainability Page represents the entity which enables accounts or client accounts to share their impact publicly.
 *
 * Upon the first retirement, the Sustainability Page displays certificates with proof of the retired carbon credits and beneficiary.
 *
 */
export type SustainabilityPage = {
    status: SustainabilityPageStatus
    slug: SustainabilityPageSlug
    title: SustainabilityPageTitle
    description: SustainabilityPageDescription | NullEnum
    customDescription: SustainabilityPageCustomDescription | null
    sections: SustainabilityPageSections | null
}
