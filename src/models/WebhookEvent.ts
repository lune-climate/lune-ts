/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order'

export type WebhookEvent = {
    /**
     * Version of the API that serialized the event. The only possible value at the moment is `v1`.
     *
     */
    apiVersion: string
    /**
     * The event’s id. The id can be used for idempotency behaviour if stored on the client side.
     */
    eventId: string
    /**
     * The event type. The type of event data will depend on the value present here.
     */
    eventType:
        | 'order.received'
        | 'order.placed'
        | 'order.allocated'
        | 'order.paid'
        | 'order.cancelled'
        | 'order.failed'
        | 'order.completed'
    /**
     * The event’s sequence. This can be compared lexicographically to determine the order of events.
     *
     * The details of the format are subject to change without notice as long as the lexicographical
     * ordering property remains intact. You can't depend on the values having any particular shape
     * (in particular you can't depend on them being valid timestamps).
     *
     */
    sequence?: string
    /**
     * Data of the event. On order.* events, this means an Order.
     */
    data: Order
}
