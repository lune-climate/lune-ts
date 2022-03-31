/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderQuoteByQuantity = {
    type: 'all-of',
    contains: [
        {
            type: 'OrderQuoteBase',
        },
        {
            properties: {
                requestedQuantity: {
                    type: 'string',
                    description: `Requested quantity for the specific bundle (tonnes CO2)`,
                    isRequired: true,
                    pattern: '^[0-9]+(\\.[0-9]+)?$',
                },
            },
        },
    ],
} as const
