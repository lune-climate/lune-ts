/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderQuoteByQuantityRequest = {
    description: `Order by Quantity details`,
    properties: {
        mass: {
            type: 'all-of',
            description: `Mass of CO2 offsets to purchase`,
            contains: [
                {
                    type: 'Mass',
                },
            ],
            isRequired: true,
        },
        bundle_selection: {
            type: 'BundleSelectionRequest',
        },
    },
} as const
