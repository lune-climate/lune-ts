/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ElectricityConsumption = {
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
