/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookEvent = {
    properties: {
        apiVersion: {
            type: 'string',
            description: `Version of the API that serialized the event. The only possible value at the moment is \`v1\`.
            `,
            isRequired: true,
        },
        eventId: {
            type: 'string',
            description: `The event’s id. The id can be used for idempotency behaviour if stored on the client side.`,
            isRequired: true,
        },
        eventType: {
            type: 'Enum',
            isRequired: true,
        },
        sequence: {
            type: 'string',
            description: `The event’s sequence. This can be compared lexicographically to determine the order of events.

            The details of the format are subject to change without notice as long as the lexicographical
            ordering property remains intact. You can't depend on the values having any particular shape
            (in particular you can't depend on them being valid timestamps).
            `,
        },
        data: {
            type: 'Order',
            description: `Data of the event. On order.* events, this means an Order.`,
            isRequired: true,
        },
    },
} as const
