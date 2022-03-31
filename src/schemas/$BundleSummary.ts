/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BundleSummary = {
    properties: {
        id: {
            type: 'string',
            description: `The bundle's unique identifier`,
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `The bundle's name`,
            isRequired: true,
        },
        unitPrice: {
            type: 'string',
            description: `Bundle unit price per tonne CO2
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        grossUnitPrice: {
            type: 'string',
            description: `Bundle unit price per tonne CO2 inclusive of fees
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        currency: {
            type: 'string',
            description: `Currency code`,
            isRequired: true,
        },
        primaryImage: {
            type: 'string',
            description: `A bundle's image URL`,
        },
        primaryImageHires: {
            type: 'string',
            description: `A bundle's high resolution image URL`,
        },
        description: {
            type: 'string',
            description: `The bundle's description`,
        },
        disabled: {
            type: 'boolean',
            description: `Disabled bundles do not accept orders
            `,
            isRequired: true,
        },
        availableQuantity: {
            type: 'string',
            description: `Quantity of CO2 offsets available to purchase (in tonnes).

            If availableQuantity is not set, assume there is an unlimited amount of offsets to purchase.
            `,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        offsetType: {
            type: 'Enum',
        },
    },
} as const
