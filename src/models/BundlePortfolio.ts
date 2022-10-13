/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelection } from './BundleSelection'

/**
 * Predefined bundle selections, for example following Oxford Offsetting Principles.
 * Bundle selection for a particular Bundle portfolio may change over time.
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
