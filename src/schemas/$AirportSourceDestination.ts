/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AirportSourceDestination = {
    properties: {
        source: {
            type: 'AirportCode',
            isRequired: true,
        },
        destination: {
            type: 'AirportCode',
            isRequired: true,
        },
    },
} as const
