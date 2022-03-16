/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderByQuantity = {
    type: 'all-of',
    contains: [
        {
            type: 'OrderBase',
        },
        {
            properties: {
                requested_quantity: {
                    type: 'string',
                    description: `Represents the requested quantity of CO2 offsets to purchase in tonnes.`,
                    isRequired: true,
                    pattern: '^[0-9]+(\\.[0-9]+)?$',
                },
            },
        },
    ],
} as const
