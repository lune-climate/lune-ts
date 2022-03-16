/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Analytics = {
    properties: {
        total_completed_offset_value: {
            type: 'string',
            description: `The total monetary value of all completed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        total_completed_offset_quantity: {
            type: 'string',
            description: `The total quantity in tCO2 of all completed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        total_placed_offset_value: {
            type: 'string',
            description: `The total monetary value of all placed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        total_placed_offset_quantity: {
            type: 'string',
            description: `The total quantity in tCO2 of all placed orders for a given interval.`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        completed_offset_values: {
            type: 'array',
            contains: {
                type: 'OffsetValueSeriesItem',
            },
            isRequired: true,
        },
        completed_offset_quantities: {
            type: 'array',
            contains: {
                type: 'OffsetQuantitySeriesItem',
            },
            isRequired: true,
        },
        placed_offset_values: {
            type: 'array',
            contains: {
                type: 'OffsetValueSeriesItem',
            },
            isRequired: true,
        },
        placed_offset_quantities: {
            type: 'array',
            contains: {
                type: 'OffsetQuantitySeriesItem',
            },
            isRequired: true,
        },
    },
} as const
