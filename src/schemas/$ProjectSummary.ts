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
        short_name: {
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
        project_type: {
            type: 'string',
            description: `The project's offset type, eg Forest conservation, Afforestation, Direct Air Capture`,
            isRequired: true,
        },
        registry_name: {
            type: 'string',
            description: `The project's Verification Standard Entity name or equivalent organization.`,
            isRequired: true,
        },
        registry_link: {
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
        country_name: {
            type: 'string',
            description: `The project's country`,
            isRequired: true,
        },
        country_code: {
            type: 'string',
            description: `The project's 3 character country code`,
            isRequired: true,
        },
        region: {
            type: 'string',
            description: `The project's region`,
        },
        primary_image: {
            type: 'string',
            description: `A project image URL`,
        },
        thumbnail_image: {
            type: 'string',
            description: `A project thumbnail image URL`,
        },
        results: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        un_sdg: {
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
