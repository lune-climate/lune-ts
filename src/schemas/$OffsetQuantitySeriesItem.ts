/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetQuantitySeriesItem = {
    properties: {
        date: {
            type: 'string',
            isRequired: true,
            format: 'date',
        },
        quantity: {
            type: 'string',
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
    },
} as const
