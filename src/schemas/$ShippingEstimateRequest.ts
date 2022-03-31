/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShippingEstimateRequest = {
    description: `Parameters for estimating shipping emissions`,
    properties: {
        shipment: {
            type: 'Shipment',
            isRequired: true,
        },
        route: {
            type: 'one-of',
            description: `Either the shipping distance or the start/destination address pair.`,
            contains: [
                {
                    type: 'Distance',
                },
                {
                    type: 'SourceDestination',
                },
            ],
            isRequired: true,
        },
        method: {
            type: 'ShippingMethod',
            isRequired: true,
        },
        countryCode: {
            type: 'string',
            description: `The three-letter code of the country where the shipping takes place, if applicable.

            Providing this value will improve the estimation process. If the shipping spans
            multiple countries you can either make multiple per-country estimations or choose
            the country with the largest share of the route.
            `,
        },
    },
} as const
