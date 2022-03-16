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
        unit_price: {
            type: 'string',
            description: `Bundle unit price per tonne CO2
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        gross_unit_price: {
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
        primary_image: {
            type: 'string',
            description: `A bundle's image URL`,
        },
        primary_image_hires: {
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
        available_quantity: {
            type: 'string',
            description: `Quantity of CO2 offsets available to purchase (in tonnes).

            If available_quantity is not set, assume there is an unlimited amount of offsets to purchase.
            `,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        offset_type: {
            type: 'Enum',
        },
    },
} as const
