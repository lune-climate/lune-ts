/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderByValue = {
    type: 'all-of',
    contains: [
        {
            type: 'OrderBase',
        },
        {
            properties: {
                requested_value: {
                    type: 'string',
                    description: `Represents the requested value of CO2 offsets to purchase.

                Unit: order currency
                `,
                    isRequired: true,
                    pattern: '^[0-9]+(\\.[0-9]+)?$',
                },
            },
        },
    ],
} as const
