/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyOnPremiseUse = {
    description: `Company's own tech infrastructure details`,
    properties: {
        electricityCost: {
            type: 'MonetaryAmount',
            isRequired: true,
        },
    },
} as const
