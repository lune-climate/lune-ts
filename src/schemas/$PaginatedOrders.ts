/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedOrders = {
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
                        type: 'Order',
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
