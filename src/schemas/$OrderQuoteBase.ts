/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderQuoteBase = {
    properties: {
        currency: {
            type: 'string',
            description: `Currency code`,
            isRequired: true,
        },
        estimatedQuantity: {
            type: 'string',
            description: `Estimated quantity (tonnes CO2).

            May be lower than \`requested_quantity\`.
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        estimatedOffsetCost: {
            type: 'string',
            description: `Estimated offset cost

            Unit: order quote currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        estimatedTotalCost: {
            type: 'string',
            description: `Estimated total cost inclusive of Lune fees.

            Unit: order quote currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        estimatedCommission: {
            type: 'string',
            description: `Estimated commission`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        bundles: {
            type: 'array',
            contains: {
                type: 'OrderBundle',
            },
            isRequired: true,
        },
    },
} as const
