/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLinkOrder = {
    properties: {
        order_id: {
            type: 'string',
            description: `The order's unique identifier`,
            isRequired: true,
        },
        created_at: {
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
                    bundle_id: {
                        type: 'string',
                        description: `The bundle's unique identifier`,
                        isRequired: true,
                    },
                    bundle_name: {
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
