/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderBase = {
    description: `Order object`,
    properties: {
        id: {
            type: 'string',
            description: `The order's unique identifier`,
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
        type: {
            type: 'Enum',
            isRequired: true,
        },
        status: {
            type: 'Enum',
            isRequired: true,
        },
        currency: {
            type: 'string',
            description: `Order currency code`,
            isRequired: true,
        },
        offsetCost: {
            type: 'string',
            description: `Represents the net cost of offsets purchased by the order. May be lower than \`requested_value\`.

            This field is set when the order is linked to Bundles.

            This field is set the order's status transitions from \`received\` to \`placed\`.

            Unit: order currency
            `,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        totalCost: {
            type: 'string',
            description: `The total cost for the order inclusive of fees.

            Unit: order currency
            `,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        commission: {
            type: 'string',
            description: `Represents Lune's fee.

            This field is set when the order is linked to Bundles.

            This field is set the order's status transitions from \`received\` to \`placed\`.

            Unit: order currency
            `,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        quantity: {
            type: 'string',
            description: `Quantity of CO2 offsets purchased in tonnes.`,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        createdAt: {
            type: 'string',
            description: `Order creation timestamp`,
            isRequired: true,
            format: 'date-time',
        },
        bundles: {
            type: 'array',
            contains: {
                type: 'OrderBundle',
            },
        },
        projects: {
            type: 'array',
            contains: {
                type: 'OrderProject',
            },
        },
        certificate: {
            type: 'string',
            description: `Carbon credits certificate URL.

            This field is set when an order in 'complete' status
            `,
        },
        metadata: {
            type: 'Metadata',
            isRequired: true,
        },
        offsetLinkId: {
            type: 'string',
            description: `The offset link identifier, if the order was placed through an offset link`,
        },
        email: {
            type: 'string',
            description: `End-user email.

            This field is currently populated on orders placed through offset links.
            `,
        },
    },
} as const
