/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProjectSummary = {
    properties: {
        id: {
            type: 'string',
            description: `The projects's unique identifier`,
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `The project's name`,
            isRequired: true,
        },
        shortName: {
            type: 'string',
            description: `The project's short name. May coincide with name.`,
            isRequired: true,
        },
        slug: {
            type: 'string',
            description: `Project slug`,
            isRequired: true,
        },
        description: {
            type: 'string',
            description: `Project description`,
            isRequired: true,
        },
        projectType: {
            type: 'string',
            description: `The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture`,
            isRequired: true,
        },
        registryName: {
            type: 'string',
            description: `The project's Verification Standard Entity name or equivalent organization.`,
            isRequired: true,
        },
        registryLink: {
            type: 'string',
            description: `A link to the registry's project details page.`,
        },
        latitude: {
            type: 'number',
            description: `Latitude`,
            isRequired: true,
            format: 'float',
        },
        longitude: {
            type: 'number',
            description: `Logitude`,
            isRequired: true,
            format: 'float',
        },
        countryName: {
            type: 'string',
            description: `The project's country`,
            isRequired: true,
        },
        countryCode: {
            type: 'string',
            description: `The project's 3 character country code`,
            isRequired: true,
        },
        region: {
            type: 'string',
            description: `The project's region`,
        },
        primaryImage: {
            type: 'string',
            description: `A project image URL`,
        },
        thumbnailImage: {
            type: 'string',
            description: `A project thumbnail image URL`,
        },
        results: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        unSdg: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        disabled: {
            type: 'boolean',
            description: `Disabled projects do not get allocated to orders
            `,
            isRequired: true,
        },
    },
} as const
