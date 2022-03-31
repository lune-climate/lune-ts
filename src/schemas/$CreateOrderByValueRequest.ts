/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateOrderByValueRequest = {
    description: `Order by Value details`,
    properties: {
        value: {
            type: 'string',
            description: `Maximum price of CO2 offsets to purchase (in the account's currency)`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        idempotencyKey: {
            type: 'string',
            description: `Optional unique identifier provided by the client.

            \`idempotencyKey\` has two purposes:
            1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
            2. Clients can use \`idempotencyKey\` to reconcile orders with other entities on their system.
            `,
            maxLength: 100,
        },
        bundleSelection: {
            type: 'BundleSelectionRequest',
        },
        metadata: {
            type: 'Metadata',
        },
    },
} as const
