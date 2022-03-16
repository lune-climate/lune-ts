/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Maps a bundle id to an allocation ratio
 */
export type BundlePercentageRequest = {
    /**
     * The bundle's unique identifier
     */
    bundle_id: string
    /**
     * Selection percentage
     */
    percentage?: number
}
