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
        remoteEmployeesPercentage: {
            type: 'IntegerPercentage',
            description: `Share of employees working remotely (in percent)`,
            isRequired: true,
        },
        officeArea: {
            type: 'Area',
            description: `Office area in square meters`,
            isRequired: true,
        },
        countryCode: {
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
        electricityConsumption: {
            type: 'number',
            description: `Electricity consumption in kWh`,
            isRequired: true,
        },
        greenElectricityUsed: {
            type: 'boolean',
            description: `Is the electricity provided by renewable source(s)?`,
            isRequired: true,
        },
        gasConsumption: {
            type: 'number',
            description: `Yearly natural gas consumption in cubic meters`,
            isRequired: true,
        },
        companyCars: {
            type: 'number',
            description: `Company cars`,
            isRequired: true,
        },
        averageCarDistanceTravelled: {
            type: 'Distance',
            description: `Average yearly distance travelled per car`,
            isRequired: true,
        },
        employeesUsingPublicTransport: {
            type: 'number',
            description: `Number of employees commuting by public transport`,
            isRequired: true,
        },
        shortFlights: {
            type: 'number',
            description: `Number of short (under 3 hours) flights per year`,
            isRequired: true,
        },
        mediumFlights: {
            type: 'number',
            description: `Number of medium (between 3 and 6 hours) flights per year`,
            isRequired: true,
        },
        longFlights: {
            type: 'number',
            description: `Number of long (over 6 hours) flights per year`,
            isRequired: true,
        },
        firstOrBusinessClassPercentage: {
            type: 'IntegerPercentage',
            description: `Share of business or first class flights, in percent`,
            isRequired: true,
        },
        foodAndDrinksExpenses: {
            type: 'MonetaryAmount',
            description: `Amount spend on food and drinks`,
            isRequired: true,
        },
        vegetarianAndVeganPercentage: {
            type: 'IntegerPercentage',
            description: `Share of vegetarians or vegans in the company, in percent`,
            isRequired: true,
        },
        electronicDeviceExpenses: {
            type: 'MonetaryAmount',
            description: `New electronic devices (laptops, monitors, etc.) expenses`,
            isRequired: true,
        },
        garbage: {
            type: 'number',
            description: `The amount of garbage produced, in kilograms`,
            isRequired: true,
        },
        recycledGarbagePercentage: {
            type: 'IntegerPercentage',
            description: `Share of recycled garbage, in percent`,
            isRequired: true,
        },
        tech: {
            properties: {
                onPremise: {
                    type: 'CompanyOnPremiseUse',
                },
                cloud: {
                    type: 'CompanyCloudUse',
                },
            },
        },
    },
} as const
