/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Bundle = {
    type: 'all-of',
    contains: [
        {
            type: 'BundleSummary',
        },
        {
            properties: {
                projects: {
                    type: 'array',
                    contains: {
                        type: 'ProjectSummary',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
