/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Analytics = {
    properties: {
        totalCompletedOffsetValue: {
            type: 'string',
            description: `The total monetary value of all completed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        totalCompletedOffsetQuantity: {
            type: 'string',
            description: `The total quantity in tCO2 of all completed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        totalPlacedOffsetValue: {
            type: 'string',
            description: `The total monetary value of all placed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        totalPlacedOffsetQuantity: {
            type: 'string',
            description: `The total quantity in tCO2 of all placed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        completedOffsetValues: {
            type: 'array',
            contains: {
                type: 'OffsetValueSeriesItem',
            },
            isRequired: true,
        },
        completedOffsetQuantities: {
            type: 'array',
            contains: {
                type: 'OffsetQuantitySeriesItem',
            },
            isRequired: true,
        },
        placedOffsetValues: {
            type: 'array',
            contains: {
                type: 'OffsetValueSeriesItem',
            },
            isRequired: true,
        },
        placedOffsetQuantities: {
            type: 'array',
            contains: {
                type: 'OffsetQuantitySeriesItem',
            },
            isRequired: true,
        },
    },
} as const
