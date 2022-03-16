/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderBundle = {
    properties: {
        bundle_id: {
            type: 'string',
            description: `The bundle's unique identifier`,
            isRequired: true,
        },
        bundle_name: {
            type: 'string',
            description: `The bundle's name`,
            isRequired: true,
        },
        quantity: {
            type: 'string',
            description: `Quantity for the specific bundle (tonnes CO2)`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        unit_price: {
            type: 'string',
            description: `Bundle unit price per tonne CO2

            Unit: order currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        gross_unit_price: {
            type: 'string',
            description: `Bundle unit price per tonne CO2 inclusive of fees.

            Unit: order currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        offset_cost: {
            type: 'string',
            description: `Represents the net cost of offsets purchased by the order for this bundle.

            Unit: order currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        insufficient_available_quantity: {
            type: 'boolean',
            description: `If true, there is no inventory necessary to fully satisfy the order for this bundle.
            `,
        },
    },
} as const
