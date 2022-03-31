/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Merchant = {
    properties: {
        categoryCode: {
            type: 'string',
            description: `An ISO 18245 Merchant Category Code (leading zeros need to be preserved) corresponding
            to the transaction.

            See https://github.com/greggles/mcc-codes for available codes.
            `,
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `The name of the merchant.`,
        },
        countryCode: {
            type: 'string',
            description: `The three-letter code of the merchant's country.`,
            isRequired: true,
        },
    },
} as const
