/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSummary } from './BundleSummary'
import type { ProjectSummary } from './ProjectSummary'

export type Project = ProjectSummary & {
    /**
     * Array of bundles the project is part of
     */
    bundles: Array<BundleSummary>
}
