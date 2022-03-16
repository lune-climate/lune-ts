/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetLink = {
    properties: {
        id: {
            type: 'string',
            description: `The offset link identifier`,
            isRequired: true,
        },
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
        logo: {
            type: 'string',
            description: `Offset link logo URL

            This is the logo URL that appears on the first screen of the offset links flow.
            `,
        },
        use_logo: {
            type: 'boolean',
            description: `Whether to include the Offset link logo (defined in Account settings) in the footer.
            `,
            isRequired: true,
        },
        url: {
            type: 'string',
            description: `The actual offset link URL that can be used to place orders`,
            isRequired: true,
            pattern:
                '^https:\\/\\/[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]*)$',
        },
        value: {
            type: 'Money',
        },
        currency: {
            type: 'CurrencyCode',
        },
        emails: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        bundles: {
            type: 'array',
            contains: {
                type: 'Bundle',
            },
        },
        created_at: {
            type: 'Timestamp',
            isRequired: true,
        },
        status: {
            type: 'OffsetLinkStatus',
            isRequired: true,
        },
        expires_at: {
            type: 'Timestamp',
        },
        require_payment: {
            type: 'boolean',
            description: `If true, the user of the Offset Link is required to pay by credit/debit card.
            `,
            isRequired: true,
        },
    },
} as const
