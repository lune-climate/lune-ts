/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderProject = {
    properties: {
        projectId: {
            type: 'string',
            description: `The project's unique identifier`,
            isRequired: true,
        },
        projectName: {
            type: 'string',
            description: `The project's name`,
            isRequired: true,
        },
        projectType: {
            type: 'string',
            description: `The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture`,
            isRequired: true,
        },
        projectSlug: {
            type: 'string',
            description: `The project's unique slug`,
            isRequired: true,
        },
        quantity: {
            type: 'string',
            description: `Carbon offset purchased (tonnes CO2)`,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        unitPrice: {
            type: 'string',
            description: `Project unit price per tonne CO2

            Unit: order currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
        offsetCost: {
            type: 'string',
            description: `Represents the net cost of offsets purchased by the order for this project.

            Unit: order currency
            `,
            isRequired: true,
            pattern: '^[0-9]+(\\.[0-9]+)?$',
        },
    },
} as const
