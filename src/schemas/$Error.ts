/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Error = {
    description: `Individual error information`,
    properties: {
        errorCode: {
            type: 'Enum',
            isRequired: true,
        },
        message: {
            type: 'string',
            description: `Human readable error message.

            This value can contain some extra information about the error in
            human-readable form. Not suitable for programmatic consumption, the format
            is not guaranteed to be stable.
            `,
            isRequired: true,
        },
    },
} as const
