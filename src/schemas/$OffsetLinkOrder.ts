/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLinkOrder = {
    properties: {
        orderId: {
            type: 'string',
            description: `The order's unique identifier`,
            isRequired: true,
        },
        createdAt: {
            type: 'Timestamp',
            isRequired: true,
        },
        email: {
            type: 'string',
            description: `The email address of the user that placed an order through the offset link`,
            isRequired: true,
        },
        bundles: {
            type: 'array',
            contains: {
                properties: {
                    bundleId: {
                        type: 'string',
                        description: `The bundle's unique identifier`,
                        isRequired: true,
                    },
                    bundleName: {
                        type: 'string',
                        description: `The bundle's name`,
                        isRequired: true,
                    },
                },
            },
            isRequired: true,
        },
    },
} as const
