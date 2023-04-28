/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetType } from './OffsetType'
import type { Registry } from './Registry'

export type AggregatedAnalyticsByProperty = {
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
    location: Array<{
        /**
         * Project location (continent).
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
