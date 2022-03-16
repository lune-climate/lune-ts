/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedProjects = {
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
                        type: 'Project',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
