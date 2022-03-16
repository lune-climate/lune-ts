/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IATACode = {
    properties: {
        code: {
            type: 'string',
            description: `Airport IATA code. For a full list of options (https://openflights.org/data.html)`,
            isRequired: true,
            pattern: '^[A-Z]{3}$',
        },
    },
} as const
