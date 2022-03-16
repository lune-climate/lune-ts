/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyEstimateRequest = {
    description: `Parameters for estimating emissions associated with operating a company.

    All relevant values are yearly values.
    `,
    properties: {
        employees: {
            type: 'number',
            description: `Number of employees`,
            isRequired: true,
        },
        remote_employees_percentage: {
            type: 'IntegerPercentage',
            description: `Share of employees working remotely (in percent)`,
            isRequired: true,
        },
        office_area: {
            type: 'Area',
            description: `Office area in square meters`,
            isRequired: true,
        },
        country_code: {
            type: 'string',
            description: `The three-letter country code of the country where the company is located.`,
            isRequired: true,
        },
        postcode: {
            type: 'string',
            description: `The company's postal code`,
        },
        city: {
            type: 'string',
        },
        electricity_consumption: {
            type: 'number',
            description: `Electricity consumption in kWh`,
            isRequired: true,
        },
        green_electricity_used: {
            type: 'boolean',
            description: `Is the electricity provided by renewable source(s)?`,
            isRequired: true,
        },
        gas_consumption: {
            type: 'number',
            description: `Yearly natural gas consumption in cubic meters`,
            isRequired: true,
        },
        company_cars: {
            type: 'number',
            description: `Company cars`,
            isRequired: true,
        },
        average_car_distance_travelled: {
            type: 'Distance',
            description: `Average yearly distance travelled per car`,
            isRequired: true,
        },
        employees_using_public_transport: {
            type: 'number',
            description: `Number of employees commuting by public transport`,
            isRequired: true,
        },
        short_flights: {
            type: 'number',
            description: `Number of short (under 3 hours) flights per year`,
            isRequired: true,
        },
        medium_flights: {
            type: 'number',
            description: `Number of medium (between 3 and 6 hours) flights per year`,
            isRequired: true,
        },
        long_flights: {
            type: 'number',
            description: `Number of long (over 6 hours) flights per year`,
            isRequired: true,
        },
        first_or_business_class_percentage: {
            type: 'IntegerPercentage',
            description: `Share of business or first class flights, in percent`,
            isRequired: true,
        },
        food_and_drinks_expenses: {
            type: 'MonetaryAmount',
            description: `Amount spend on food and drinks`,
            isRequired: true,
        },
        vegetarian_and_vegan_percentage: {
            type: 'IntegerPercentage',
            description: `Share of vegetarians or vegans in the company, in percent`,
            isRequired: true,
        },
        electronic_device_expenses: {
            type: 'MonetaryAmount',
            description: `New electronic devices (laptops, monitors, etc.) expenses`,
            isRequired: true,
        },
        garbage: {
            type: 'number',
            description: `The amount of garbage produced, in kilograms`,
            isRequired: true,
        },
        recycled_garbage_percentage: {
            type: 'IntegerPercentage',
            description: `Share of recycled garbage, in percent`,
            isRequired: true,
        },
        tech: {
            properties: {
                on_premise: {
                    type: 'CompanyOnPremiseUse',
                },
                cloud: {
                    type: 'CompanyCloudUse',
                },
            },
        },
    },
} as const
