/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLinkAnalytics = {
    properties: {
        id: {
            type: 'string',
            description: `The offset link identifier`,
            isRequired: true,
        },
        uniqueVisitors: {
            type: 'number',
            description: `The number of unique visitors for the specific offset link`,
            isRequired: true,
        },
        placedOrders: {
            type: 'number',
            description: `The number of placed orders for the specific offset link`,
            isRequired: true,
        },
        orders: {
            type: 'array',
            contains: {
                type: 'OffsetLinkOrder',
            },
            isRequired: true,
        },
    },
} as const
