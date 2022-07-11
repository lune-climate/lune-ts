/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSummary } from './BundleSummary'
import type { ProjectSummary } from './ProjectSummary'

/**
 * Group of projects of similar price and characteristics.
 *
 * Orders are placed against bundles.
 *
 */
export type Bundle = BundleSummary & {
    /**
     * Array of projects that belong to the bundle
     */
    projects: Array<ProjectSummary>
}
