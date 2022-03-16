/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedOffsetLinks = {
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
                        type: 'OffsetLink',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
