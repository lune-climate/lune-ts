/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AirportCode = {
    type: 'one-of',
    contains: [
        {
            type: 'IATACode',
        },
        {
            type: 'ICAOCode',
        },
    ],
} as const
