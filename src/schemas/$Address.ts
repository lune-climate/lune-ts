/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Address = {
    properties: {
        street_line1: {
            type: 'string',
            description: `A street and house number (or equivalent).`,
            isRequired: true,
        },
        street_line2: {
            type: 'string',
            description: `An address component more precise than a street and house number.`,
        },
        postcode: {
            type: 'string',
            description: `The postal code in the format specific to the country it's in`,
            isRequired: true,
        },
        city: {
            type: 'string',
            isRequired: true,
        },
        country_code: {
            type: 'string',
            description: `A three-letter country code.`,
            isRequired: true,
        },
    },
} as const
