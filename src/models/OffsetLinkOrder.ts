/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Timestamp } from './Timestamp'

export type OffsetLinkOrder = {
    /**
     * The order's unique identifier
     */
    order_id: string
    created_at: Timestamp
    /**
     * The email address of the user that placed an order through the offset link
     */
    email: string
    bundles: Array<{
        /**
         * The bundle's unique identifier
         */
        bundle_id: string
        /**
         * The bundle's name
         */
        bundle_name: string
    }>
}
