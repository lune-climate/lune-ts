/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetType } from './OffsetType'
import type { Registry } from './Registry'

export type AggregatedAnalyticsByProperty = {
    /**
     * An array of objects describing a bundle's aggregated orders.
     */
    bundle: Array<{
        /**
         * The bundle's unique identifier.
         */
        bundleId: string
        /**
         * The bundle's name.
         */
        bundleName: string
        /**
         * Quantity of CO2 offsets linked to this activity (tonnes CO2).
         */
        quantity: string
        /**
         * CO2 offsets' monetary value.
         */
        value: string
    }>
    /**
     * An array of objects describing a location's aggregated orders.
     */
    location: Array<{
        /**
         * Project location (continent). If a project has yet to be assigned 'Not yet allocated' is returned instead.
         */
        location: string
        /**
         * Quantity of CO2 offsets linked to this activity (tonnes CO2).
         */
        quantity: string
        /**
         * CO2 offsets' monetary value
         */
        value: string
    }>
    /**
     * An array of objects describing a registry's aggregated orders.
     */
    registry: Array<{
        registryName: Registry
        /**
         * Quantity of CO2 offsets linked to this activity (tonnes CO2).
         */
        quantity: string
        /**
         * CO2 offsets' monetary value.
         */
        value: string
    }>
    /**
     * An array of objects describing aggregated orders for each Oxford Offsetting Principle's type.
     */
    oxfordOffsettingPrinciples: Array<{
        /**
         * Oxford Offsetting Principles' type.
         *
         * https://lune.co/blog/the-oxford-offsetting-principles-a-framework-to-maximise-the-impact-of-business-carbon-offsetting/.
         *
         */
        type: number
        /**
         * Quantity of CO2 offsets linked to this activity (tonnes CO2)
         */
        quantity: string
        /**
         * CO2 offsets' monetary value
         */
        value: string
    }>
    /**
     * An array of objects describing aggregated orders by offset type.
     */
    offsetType: Array<{
        offsetType: OffsetType
        /**
         * Quantity of CO2 offsets linked to this activity (tonnes CO2)
         */
        quantity: string
        /**
         * CO2 offsets' monetary value
         */
        value: string
    }>
}
