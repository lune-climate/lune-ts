/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookRequest = {
    properties: {
        events: {
            type: 'array',
            contains: {
                type: 'WebhookEvent',
            },
            isRequired: true,
        },
    },
} as const
