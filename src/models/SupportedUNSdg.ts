/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The list of supported UN Sustainable Development Goals (SDGs)
 */
export type SupportedUNSdg = Array<{
    /**
     * The number which identifies the specific UN SDG.
     */
    unSdgNumber: number
    /**
     * The total number of projects supporting this UN SDG.
     */
    occurrences: number
}> | null
