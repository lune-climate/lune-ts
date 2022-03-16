/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyCloudUse = {
    description: `Company's use of cloud services`,
    properties: {
        cost: {
            type: 'MonetaryAmount',
            isRequired: true,
        },
        provider: {
            type: 'CloudProvider',
            isRequired: true,
        },
    },
} as const
