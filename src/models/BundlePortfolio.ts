/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelection } from './BundleSelection'

/**
 * A curated group of predefined project bundles., e.g., Oxford Offsetting Principles.
 *
 * Project bundles for a particular Bundle portfolio may change over time.
 *
 */
export type BundlePortfolio = {
    /**
     * Bundle portfolio unique identifier.
     */
    id: string
    /**
     * Identifier of the bundle portfolio.
     */
    identifier: string
    /**
     * Human readable name of the bundle portfolio.
     */
    label: string
    bundleSelection: BundleSelection
}
