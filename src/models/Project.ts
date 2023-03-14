/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSummary } from './BundleSummary'
import type { MonetaryAmount } from './MonetaryAmount'
import type { MuiIcon } from './MuiIcon'
import type { ProjectSummary } from './ProjectSummary'
import type { TitleAndDescription } from './TitleAndDescription'

export type Project = ProjectSummary & {
    /**
     * Array of bundles the project is part of
     */
    bundles: Array<BundleSummary>
    /**
     * The items of the array are ordered exactly as they're meant to be used.
     *
     * A null value means there's no data or the section is disabled.
     *
     */
    impactSummary: Array<{
        icon: MuiIcon
        /**
         * A short piece of text to go with the icon
         */
        label: string
        title: string
        description: string
        imageUrl: string
    }> | null
    /**
     * The way the project relates to every of the five Project Quality Assessment categories.
     *
     * A null value means there's no data or the section is disabled.
     *
     */
    qualityAssessment: {
        durability: TitleAndDescription
        additionality: TitleAndDescription
        measurement: TitleAndDescription
        riskMitigation: TitleAndDescription
        cobenefits: TitleAndDescription
    } | null
    /**
     * A null value means there's no data or the section is disabled.
     */
    linksAndNews: {
        /**
         * The order of the array is how the elements are meant to be used.
         */
        links: Array<{
            destinationUrl: string
            title: string
            faviconUrl: string
        }>
        /**
         * The order of the array is how the elements are meant to be used.
         */
        news: Array<{
            imageUrl: string
            faviconUrl: string
            articleUrl: string
            title: string
            description: string
            publishedAt: string | null
        }>
    } | null
    /**
     * A null value means there's no data or the section is disabled. Note that
     * availability can be missing data or be disabled separately.
     *
     */
    carbonCredits: {
        offsetDelivery: Project.offset_delivery
        retirementTimeframe: Project.retirement_timeframe
        /**
         * What's available for sale.
         *
         * A null value means there's no data or the section is disabled.
         *
         * The array is ordered newest to oldest (per the year property).
         *
         */
        inventory: Array<{
            /**
             * This is an opaque string and you may not interpret it in any way.
             */
            vintage: string
            /**
             * In tonnes.
             */
            quantity: number
            price: MonetaryAmount
        }> | null
    } | null
    /**
     * The array order is newest to oldest.
     *
     * A null value means there's no data or the section is disabled.
     *
     */
    timeline: Array<{
        year: number
        description: string
    }> | null
    /**
     * The order of the array is oldest to newest (per the year property).
     *
     * A null value means there's no data or the section is disabled.
     *
     * The values (except for year, of course) are in tonnes.
     *
     */
    carbonStorageOverTime: Array<{
        year: number
        baseline: number
        carbonStock: number
        assumedLeakage: number
        buffer: number
        creditsIssued: number
    }> | null
}

export namespace Project {
    export enum offset_delivery {
        EX_POST = 'ex-post',
        EX_ANTE = 'ex-ante',
        PRE_PURCHASE = 'pre-purchase',
    }

    export enum retirement_timeframe {
        INSTANT = 'instant',
        NEAR_TERM = 'near_term',
        FUTURE = 'future',
    }
}
