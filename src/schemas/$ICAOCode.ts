/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ICAOCode = {
    properties: {
        code: {
            type: 'string',
            description: `Airport ICAO code. For a full list of options (https://openflights.org/data.html)`,
            isRequired: true,
            pattern: '^[A-Z]{4}[A-Z]?$',
        },
    },
} as const
