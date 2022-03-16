/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Order = {
    type: 'one-of',
    contains: [
        {
            type: 'OrderByQuantity',
        },
        {
            type: 'OrderByValue',
        },
    ],
} as const
