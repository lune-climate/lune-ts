/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompanyEmissionEstimate = {
    type: 'all-of',
    contains: [
        {
            type: 'EmissionEstimate',
        },
        {
            properties: {
                scope1: {
                    type: 'Mass',
                    description: `Scope 1 emissions. Direct emissions from owned or controlled sources.`,
                    isRequired: true,
                },
                scope2: {
                    type: 'Mass',
                    description: `Scope 2 emissions. Indirect emissions from the generation of purchased or acquired electricity, steam, heating, or cooling consumed.`,
                    isRequired: true,
                },
                scope3: {
                    type: 'Mass',
                    description: `Scope 3 emissions. All indirect emissions, not included in scope 2, that occur in the value chain.`,
                    isRequired: true,
                },
                components: {
                    properties: {
                        material_and_waste: {
                            type: 'Mass',
                            description: `Emissions associated with buying equipment and generating waste.`,
                            isRequired: true,
                        },
                        energy: {
                            type: 'Mass',
                            description: `Emissions associated with purchasing energy (electricy, heating etc.)`,
                            isRequired: true,
                        },
                        travel_and_commute: {
                            type: 'Mass',
                            description: `Emissions associated with business travels and commuting to/from work.`,
                            isRequired: true,
                        },
                        food_and_drink: {
                            type: 'Mass',
                            description: `Emissions associated with food and drinks.`,
                            isRequired: true,
                        },
                        tech: {
                            type: 'Mass',
                            description: `Emissions associated with operating computer systems.`,
                            isRequired: true,
                        },
                    },
                    isRequired: true,
                },
            },
        },
    ],
} as const
