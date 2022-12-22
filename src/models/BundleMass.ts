/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Mass } from './Mass'

/**
 * Maps a bundle's unique identifier to a mass
 */
export type BundleMass = {
    /**
     * The bundle's unique identifier
     */
    bundleId: string
    mass: Mass
}
