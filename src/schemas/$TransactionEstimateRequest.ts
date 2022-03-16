/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionEstimateRequest = {
    description: `Parameters for estimating emissions associated with purchasing goods or services.`,
    properties: {
        value: {
            type: 'MonetaryAmount',
            isRequired: true,
        },
        merchant: {
            type: 'Merchant',
            isRequired: true,
        },
        diet: {
            type: 'Diet',
        },
    },
} as const
