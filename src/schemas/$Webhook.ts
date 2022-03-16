/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Webhook = {
    properties: {
        id: {
            type: 'string',
            description: `The webhook's identifier`,
            isRequired: true,
        },
        url: {
            type: 'Url',
            isRequired: true,
        },
        enabled: {
            type: 'boolean',
            description: `Determines if events should be sent to the webhook or not.`,
            isRequired: true,
        },
        secret: {
            type: 'string',
            description: `The secret key used to generate the webhook payload HMAC.`,
            isRequired: true,
        },
    },
} as const
