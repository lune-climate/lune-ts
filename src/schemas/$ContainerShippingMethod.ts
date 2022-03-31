/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContainerShippingMethod = {
    properties: {
        vesselType: {
            type: 'Enum',
            isRequired: true,
        },
        refrigerated: {
            type: 'boolean',
            description: `A container transport is either refrigerated or "dry" (not refrigerated). Dry transports
            result in lower emissions.

            This parameter defaults to \`true\`.
            `,
        },
        tradeLane: {
            type: 'Enum',
        },
    },
} as const
