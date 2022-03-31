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
        balance_delta: {
            type: 'string',
            description: `Account's cash balance delta.

            The previous balance plus \`balance_delta\` equals the current balance.

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        balance_outstanding: {
            type: 'string',
            description: `The Account's outstanding balance at the time of this activity

            Unit: Account currency
            `,
            isRequired: true,
            pattern: '^-?[0-9]+(\\.[0-9]+)?$',
        },
        balance_outstanding_delta: {
            type: 'string',
            description: `Account's outstanding balance delta.

            The previous outstanding balance plus \`balance_outstanding_delta\` equals the current outstanding balance.

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
        order_id: {
            type: 'string',
            description: `The order's unique identifier`,
        },
        project_id: {
            type: 'string',
            description: `The project's unique identifier`,
        },
        project_name: {
            type: 'string',
            description: `The project's name`,
        },
        created_at: {
            type: 'string',
            description: `Activity creation timestamp`,
            isRequired: true,
            format: 'date-time',
        },
    },
} as const
