/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocationEventDetails } from './AllocationEventDetails'
import type { OrderEventDetails } from './OrderEventDetails'

export type WebhookEvent = {
    /**
     * Version of the API that serialized the event. The only possible value at the moment is `v1`.
     *
     */
    apiVersion: string
    /**
     * The account identifier the event belongs to.
     */
    accountId?: string
    /**
     * The event’s id. The id can be used for idempotency behaviour if stored on the client side.
     */
    eventId: string
    /**
     * The event type. The type of event data will depend on the value present here.
     */
    eventType: WebhookEvent.event_type
    /**
     * The event’s sequence. This can be compared lexicographically to determine the order of events.
     *
     * The details of the format are subject to change without notice as long as the lexicographical
     * ordering property remains intact. You can't depend on the values having any particular shape
     * (in particular you can't depend on them being valid timestamps).
     *
     */
    sequence: string
    /**
     * Data of the event. On order.* events, this means an Order. On allocation.* events, this mean an allocation.
     */
    data: OrderEventDetails | AllocationEventDetails
}

export namespace WebhookEvent {
    /**
     * The event type. The type of event data will depend on the value present here.
     */
    export enum event_type {
        ORDER_RECEIVED = 'order.received',
        ORDER_PLACED = 'order.placed',
        ORDER_PAID = 'order.paid',
        ORDER_RETIRING = 'order.retiring',
        ORDER_CANCELLED = 'order.cancelled',
        ORDER_FAILED = 'order.failed',
        ORDER_COMPLETED = 'order.completed',
        ALLOCATION_NEW = 'allocation.new',
        ALLOCATION_RETIRED = 'allocation.retired',
    }
}
