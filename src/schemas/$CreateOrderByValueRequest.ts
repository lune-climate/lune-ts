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
        idempotency_key: {
            type: 'string',
            description: `Optional unique identifier provided by the client.

            \`idempotency_key\` has two purposes:
            1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
            2. Clients can use \`idempotency_key\` to reconcile orders with other entities on their system.
            `,
            maxLength: 100,
        },
        bundle_selection: {
            type: 'BundleSelectionRequest',
        },
        metadata: {
            type: 'Metadata',
        },
    },
} as const
