/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedBundles = {
    type: 'all-of',
    contains: [
        {
            type: 'PaginatedBase',
        },
        {
            properties: {
                data: {
                    type: 'array',
                    contains: {
                        type: 'Bundle',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
