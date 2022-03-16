/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedBase = {
    properties: {
        has_more: {
            type: 'boolean',
            description: `Whether or not there are more elements available after this set. If false, this set comprises the end of the array.`,
            isRequired: true,
        },
    },
} as const
