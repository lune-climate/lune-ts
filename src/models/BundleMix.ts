/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelection } from './BundleSelection'

/**
 * Bundle mix information.
 */
export type BundleMix = {
    /**
     * Id of the bundle mix.
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
