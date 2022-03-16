/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Mass = {
    properties: {
        amount: {
            type: 'string',
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        unit: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const
