/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateWebhookRequest = {
    properties: {
        url: {
            type: 'Url',
        },
        enabled: {
            type: 'boolean',
            description: `Determines if events should be sent to the webhook or not. Defaults to \`true\` for newly created
            webhooks. When updating a webhook and the value is not explicitly specified the existing value
            will be used.
            `,
        },
    },
} as const
