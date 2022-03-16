/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FlightEstimateRequest = {
    description: `Parameters for estimating emissions for commercial plane travel`,
    properties: {
        route: {
            type: 'one-of',
            description: `Either the flying distance or the start/destination airport code (ICAO or IATA).`,
            contains: [
                {
                    type: 'Distance',
                },
                {
                    type: 'AirportSourceDestination',
                },
            ],
            isRequired: true,
        },
        cabin_class: {
            type: 'CabinClass',
        },
        passengers: {
            type: 'number',
            description: `Number of passengers the calculation should be applied to.
            This parameter defaults to 1.`,
        },
    },
} as const
