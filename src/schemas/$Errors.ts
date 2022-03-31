/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Errors = {
    description: `An error container`,
    properties: {
        errors: {
            type: 'array',
            contains: {
                type: 'Error',
            },
            isRequired: true,
        },
    },
} as const
