/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelection } from './BundleSelection'

/**
 * Predefined bundle selections, for example following Oxford Offsetting Principles.
 * Bundle selection for a particular Bundle mix may change over time.
 *
 */
export type BundleMix = {
    /**
     * Bundle mix unique identifier.
     */
    id: string
    /**
     * Identifier of the bundle mix.
     */
    identifier: string
    /**
     * Human readable name of the bundle mix.
     */
    label: string
    bundleSelection: BundleSelection
}
