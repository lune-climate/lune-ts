/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Account = {
    properties: {
        id: {
            type: 'string',
            description: `The Account's unique identifier`,
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `The Account's name`,
            isRequired: true,
        },
        organisation_id: {
            type: 'string',
            description: `The unique identifier of the organisation this account belongs to`,
            isRequired: true,
        },
        currency: {
            type: 'string',
            description: `The Account's currency`,
            isRequired: true,
        },
        balance: {
            type: 'string',
            description: `Account's cash balance.

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        balance_outstanding: {
            type: 'string',
            description: `The Account's outstanding balance represents the sum of placed and unpaid orders.

            The outstanding balance is mostly negative.

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        type: {
            type: 'Enum',
            isRequired: true,
        },
        logo: {
            type: 'string',
            description: `Offset link logo URL

            This is the logo URL that appears on the first screen of the offset links flow.
            `,
        },
        beneficiary: {
            type: 'string',
            description: `Retirement beneficiary

            This is the name that appears on future retirements that are made in this account.
            If none is present, the organisation beneficiary will be used instead.
            `,
        },
    },
} as const
