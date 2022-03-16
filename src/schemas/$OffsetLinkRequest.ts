/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLinkRequest = {
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
        expires_at: {
            type: 'Timestamp',
        },
        use_logo: {
            type: 'boolean',
            description: `Whether to include the Offset link logo (defined in Account settings) in the footer.
            `,
            isRequired: true,
        },
        require_payment: {
            type: 'boolean',
            description: `If true, the user of the Offset Link is required to pay by credit/debit card.
            This value cannot be updated once the offset link has been created.
            `,
        },
    },
} as const
