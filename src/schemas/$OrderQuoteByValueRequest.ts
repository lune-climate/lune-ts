/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderQuoteByValueRequest = {
    description: `Order by Value details`,
    properties: {
        value: {
            type: 'string',
            description: `Maximum price of CO2 offsets to purchase (in the account's currency)`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        bundleSelection: {
            type: 'BundleSelectionRequest',
        },
    },
} as const
