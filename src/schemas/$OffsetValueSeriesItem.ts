/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OffsetValueSeriesItem = {
    properties: {
        date: {
            type: 'string',
            isRequired: true,
            format: 'date',
        },
        value: {
            type: 'string',
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
    },
} as const
