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
