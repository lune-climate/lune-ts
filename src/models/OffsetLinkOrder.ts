/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Timestamp } from './Timestamp'

export type OffsetLinkOrder = {
    /**
     * The order's unique identifier
     */
    orderId: string
    createdAt: Timestamp
    /**
     * The email address of the user that placed an order through the offset link
     */
    email: string
    bundles: Array<{
        /**
         * The bundle's unique identifier
         */
        bundleId: string
        /**
         * The bundle's name
         */
        bundleName: string
    }>
}
