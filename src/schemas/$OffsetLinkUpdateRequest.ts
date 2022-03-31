/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLinkUpdateRequest = {
    properties: {
        name: {
            type: 'string',
            description: `Offset link name.

            This is a human readable name to recognise and distingish different offset links.
            `,
            isRequired: true,
        },
        title: {
            type: 'string',
            description: `Offset link title

            This is the title that appears on the first screen of the offset links flow.
            `,
        },
        description: {
            type: 'string',
            description: `Offset link description

            This is the description that appears on the first screen of the offset links flow.
            `,
        },
        bundles: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        value: {
            type: 'Money',
        },
        emails: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        expiresAt: {
            type: 'Timestamp',
        },
        useLogo: {
            type: 'boolean',
            description: `Whether to include the Offset link logo (defined in Account settings) in the footer.
            `,
            isRequired: true,
        },
    },
} as const
