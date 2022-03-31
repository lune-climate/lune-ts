/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Activity = {
    properties: {
        id: {
            type: 'string',
            description: `The activity's unique identifier`,
            isRequired: true,
        },
        currency: {
            type: 'string',
            description: `Account currency code.

            All activity rows amount are relative to the account's currency.
            `,
            isRequired: true,
        },
        source: {
            type: 'Enum',
            isRequired: true,
        },
        balance: {
            type: 'string',
            description: `Account's cash balance at the time of this activity

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        balanceDelta: {
            type: 'string',
            description: `Account's cash balance delta.

            The previous balance plus \`balanceDelta\` equals the current balance.

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        balanceOutstanding: {
            type: 'string',
            description: `The Account's outstanding balance at the time of this activity

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        balanceOutstandingDelta: {
            type: 'string',
            description: `Account's outstanding balance delta.

            The previous outstanding balance plus \`balanceOutstandingDelta\` equals the current outstanding balance.

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        quantity: {
            type: 'string',
            description: `Quantity of CO2 offsets linked to this activity (tonnes CO2)`,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        orderId: {
            type: 'string',
            description: `The order's unique identifier`,
        },
        projectId: {
            type: 'string',
            description: `The project's unique identifier`,
        },
        projectName: {
            type: 'string',
            description: `The project's name`,
        },
        createdAt: {
            type: 'string',
            description: `Activity creation timestamp`,
            isRequired: true,
            format: 'date-time',
        },
    },
} as const
