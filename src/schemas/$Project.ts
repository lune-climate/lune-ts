/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Project = {
    type: 'all-of',
    contains: [
        {
            type: 'ProjectSummary',
        },
        {
            properties: {
                bundles: {
                    type: 'array',
                    contains: {
                        type: 'BundleSummary',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
