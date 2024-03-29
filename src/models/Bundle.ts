// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSummary } from './BundleSummary.js'
import type { ProjectSummary } from './ProjectSummary.js'

/**
 * Group of projects of similar price and characteristics.
 *
 * Orders are placed against bundles.
 *
 */
export type Bundle = BundleSummary & {
    /**
     * An array of Project objects that belong to the bundle.
     */
    projects: Array<ProjectSummary>
}
