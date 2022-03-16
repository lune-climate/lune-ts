/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetLinkOrder } from './OffsetLinkOrder'

export type OffsetLinkAnalytics = {
    /**
     * The offset link identifier
     */
    id: string
    /**
     * The number of unique visitors for the specific offset link
     */
    unique_visitors: number
    /**
     * The number of placed orders for the specific offset link
     */
    placed_orders: number
    orders: Array<OffsetLinkOrder>
}
