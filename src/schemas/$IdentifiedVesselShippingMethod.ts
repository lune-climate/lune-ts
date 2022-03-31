/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IdentifiedVesselShippingMethod = {
    properties: {
        vesselImoNumber: {
            type: 'string',
            description: `The ship's [IMO number](https://en.wikipedia.org/wiki/IMO_number) *without* the \`IMO\` prefix.
            `,
            isRequired: true,
            pattern: '^[0-9]{7}$',
        },
    },
} as const
