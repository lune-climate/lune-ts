/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionEstimate } from './EmissionEstimate'
import type { Mass } from './Mass'

export type CompanyEmissionEstimate = EmissionEstimate & {
    /**
     * Scope 1 emissions. Direct emissions from owned or controlled sources.
     */
    scope1: Mass
    /**
     * Scope 2 emissions. Indirect emissions from the generation of purchased or acquired electricity, steam, heating, or cooling consumed.
     */
    scope2: Mass
    /**
     * Scope 3 emissions. All indirect emissions, not included in scope 2, that occur in the value chain.
     */
    scope3: Mass
    components: {
        /**
         * Emissions associated with buying equipment and generating waste.
         */
        materialAndWaste: Mass
        /**
         * Emissions associated with purchasing energy (electricy, heating etc.)
         */
        energy: Mass
        /**
         * Emissions associated with business travels and commuting to/from work.
         */
        travelAndCommute: Mass
        /**
         * Emissions associated with food and drinks.
         */
        foodAndDrink: Mass
        /**
         * Emissions associated with operating computer systems.
         */
        tech: Mass
    }
}
