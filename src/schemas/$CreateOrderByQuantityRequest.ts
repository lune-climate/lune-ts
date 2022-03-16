/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateOrderByQuantityRequest = {
    description: `Order by Quantity details`,
    properties: {
        mass: {
            type: 'all-of',
            description: `Mass of CO2 offsets to purchase`,
            contains: [
                {
                    type: 'Mass',
                },
            ],
            isRequired: true,
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
