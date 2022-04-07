/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SourceDestination = {
    properties: {
        source: {
            type: 'one-of',
            contains: [
                {
                    type: 'Address',
                },
                {
                    type: 'GeographicCoordinates',
                },
            ],
            isRequired: true,
        },
        destination: {
            type: 'one-of',
            contains: [
                {
                    type: 'Address',
                },
                {
                    type: 'GeographicCoordinates',
                },
            ],
            isRequired: true,
        },
    },
} as const
