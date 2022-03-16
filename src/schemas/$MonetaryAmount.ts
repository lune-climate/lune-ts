/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MonetaryAmount = {
    properties: {
        value: {
            type: 'string',
            description: `An amount of money (the fractional part is optional)`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        currency: {
            type: 'CurrencyCode',
            isRequired: true,
        },
    },
} as const
