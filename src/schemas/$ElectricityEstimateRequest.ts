/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ElectricityEstimateRequest = {
    description: `Parameters for estimating electricity emissions`,
    properties: {
        consumption: {
            type: 'ElectricityConsumption',
            isRequired: true,
        },
        countryCode: {
            type: 'string',
            description: `The three-letter code of the country where the consumption takes place, if applicable.

            Providing this value will improve the estimation process. If the value is not provided
            the global average will be used.
            `,
        },
    },
} as const
