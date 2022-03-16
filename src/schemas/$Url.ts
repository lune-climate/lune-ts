/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Url = {
    type: 'string',
    description: `An HTTPS URL`,
    pattern:
        '^https:\\/\\/[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]*)$',
} as const
