/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedActivity = {
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
                        type: 'Activity',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
