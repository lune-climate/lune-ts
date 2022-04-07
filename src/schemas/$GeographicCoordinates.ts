/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeographicCoordinates = {
    properties: {
        lat: {
            type: 'number',
            description: `Latitude`,
            isRequired: true,
            maximum: 90,
            minimum: -90,
        },
        lon: {
            type: 'number',
            description: `Longitude`,
            isRequired: true,
            maximum: 180,
            minimum: -180,
        },
    },
} as const
