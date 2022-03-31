/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderQuoteByValue = {
    type: 'all-of',
    contains: [
        {
            type: 'OrderQuoteBase',
        },
        {
            properties: {
                requestedValue: {
                    type: 'string',
                    description: `Requested order value inclusive of commission`,
                    isRequired: true,
                    pattern: '^[0-9]+(\\.[0-9]+)?$',
                },
            },
        },
    ],
} as const
