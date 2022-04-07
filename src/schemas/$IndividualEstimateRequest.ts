/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $IndividualEstimateRequest = {
    description: `Parameters for estimating an individual's emissions

    All relevant values are yearly values.
    `,
    properties: {
        country_code: {
            type: 'string',
            description: `The three-letter country code of the country where the company is located.`,
            isRequired: true,
        },
        car_use: {
            type: 'boolean',
            description: `Does the individual use a car?`,
            isRequired: true,
        },
        car_fuel_type: {
            type: 'Enum',
        },
        average_car_distance_travelled: {
            type: 'Distance',
            description: `Average yearly distance travelled per car`,
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
        days_per_week_using_public_transport: {
            type: 'number',
            description: `Number of days per week commuting by public transport`,
            isRequired: true,
        },
        diet: {
            type: 'Diet',
            isRequired: true,
        },
        monthly_grocery_expenses: {
            type: 'MonetaryAmount',
            description: `Food, supermarket, farmers market, fishmongers etc... expenses`,
            isRequired: true,
        },
        monthly_restaurant_expenses: {
            type: 'MonetaryAmount',
            description: `Dining and take out expenses`,
            isRequired: true,
        },
        monthly_clothing_expenses: {
            type: 'MonetaryAmount',
            description: `Clothing expenses`,
            isRequired: true,
        },
        monthly_furniture_appliances_expenses: {
            type: 'MonetaryAmount',
            description: `Furniture and appliances expenses`,
            isRequired: true,
        },
        monthly_other_expenses: {
            type: 'MonetaryAmount',
            description: `Other such as phone, laptops, any other "item" you can think of.`,
        },
        electricity_consumption: {
            type: 'number',
            description: `Annual electricity consumption in kWh`,
            isRequired: true,
        },
        green_electricity_used: {
            type: 'boolean',
            description: `Is the electricity provided by renewable source(s)?`,
            isRequired: true,
        },
        gas_consumption: {
            type: 'number',
            description: `Annual natural gas consumption in cubic meters`,
            isRequired: true,
        },
    },
} as const
