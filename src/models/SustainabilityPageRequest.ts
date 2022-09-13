/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SustainabilityPageCustomDescription } from './SustainabilityPageCustomDescription'
import type { SustainabilityPageDescription } from './SustainabilityPageDescription'
import type { SustainabilityPageSections } from './SustainabilityPageSections'
import type { SustainabilityPageSlug } from './SustainabilityPageSlug'
import type { SustainabilityPageStatus } from './SustainabilityPageStatus'
import type { SustainabilityPageTitle } from './SustainabilityPageTitle'

export type SustainabilityPageRequest = {
    status: SustainabilityPageStatus
    slug: SustainabilityPageSlug
    title: SustainabilityPageTitle
    description?: SustainabilityPageDescription
    customDescription?: SustainabilityPageCustomDescription
    sections: SustainabilityPageSections
}