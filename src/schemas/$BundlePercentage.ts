/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BundlePercentage = {
    description: `Maps a bundle id to an allocation ratio`,
    properties: {
        bundle_id: {
            type: 'string',
            description: `The bundle's unique identifier`,
            isRequired: true,
        },
        percentage: {
            type: 'number',
            description: `Selection percentage`,
            isRequired: true,
        },
    },
} as const
