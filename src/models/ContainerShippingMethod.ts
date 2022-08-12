/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContainerShippingMethod = {
    vesselType: ContainerShippingMethod.vessel_type
    /**
     * A container transport is either refrigerated or "dry" (not refrigerated). Dry transports
     * result in lower emissions.
     *
     */
    refrigerated?: boolean
    /**
     * Container transport emissions vary per trade lane. When a trade lane is not given we'll
     * use an industry-wide average. Providing an `aggregated_*` trade lane group will result in an
     * a more accurate estimate. Providing an `disaggregated_*` trade lane will result in the best
     * estimate precision.
     *
     * The identifiers are kept relatively short for brevity: Mediterranean includes Black Sea and
     * South America includes Central America.
     *
     * The trade lanes are bidirectional, for example `disaggregated_asia_to_africa` covers both
     * Asia to Africa and Africa to Asia.
     *
     */
    tradeLane?: ContainerShippingMethod.trade_lane
}

export namespace ContainerShippingMethod {
    export enum vessel_type {
        CONTAINER_SHIP = 'container_ship',
    }

    /**
     * Container transport emissions vary per trade lane. When a trade lane is not given we'll
     * use an industry-wide average. Providing an `aggregated_*` trade lane group will result in an
     * a more accurate estimate. Providing an `disaggregated_*` trade lane will result in the best
     * estimate precision.
     *
     * The identifiers are kept relatively short for brevity: Mediterranean includes Black Sea and
     * South America includes Central America.
     *
     * The trade lanes are bidirectional, for example `disaggregated_asia_to_africa` covers both
     * Asia to Africa and Africa to Asia.
     *
     */
    export enum trade_lane {
        AGGREGATED_PANAMA_TRADE = 'aggregated_panama_trade',
        AGGREGATED_TRANSATLANTIC = 'aggregated_transatlantic',
        AGGREGATED_TRANSSUEZ = 'aggregated_transsuez',
        AGGREGATED_TRANSPACIFIC = 'aggregated_transpacific',
        AGGREGATED_OTHER = 'aggregated_other',
        DISAGGREGATED_ASIA_TO_AFRICA = 'disaggregated_asia_to_africa',
        DISAGGREGATED_ASIA_TO_MEDITERRANEAN = 'disaggregated_asia_to_mediterranean',
        DISAGGREGATED_ASIA_TO_MIDDLE_EAST = 'disaggregated_asia_to_middle_east',
        DISAGGREGATED_ASIA_TO_NORTH_AMERICA_EAST = 'disaggregated_asia_to_north_america_east',
        DISAGGREGATED_ASIA_TO_NORTH_AMERICA_WEST = 'disaggregated_asia_to_north_america_west',
        DISAGGREGATED_ASIA_TO_NORTH_EUROPE = 'disaggregated_asia_to_north_europe',
        DISAGGREGATED_ASIA_TO_OCEANIA = 'disaggregated_asia_to_oceania',
        DISAGGREGATED_ASIA_TO_SOUTH_AMERICA = 'disaggregated_asia_to_south_america',
        DISAGGREGATED_EUROPE_TO_AFRICA = 'disaggregated_europe_to_africa',
        DISAGGREGATED_EUROPE_TO_SOUTH_AMERICA = 'disaggregated_europe_to_south_america',
        DISAGGREGATED_EUROPE_TO_MIDDLE_EAST = 'disaggregated_europe_to_middle_east',
        DISAGGREGATED_EUROPE_TO_OCEANIA = 'disaggregated_europe_to_oceania',
        DISAGGREGATED_MEDITERRANEAN_TO_NORTH_AMERICA_EAST = 'disaggregated_mediterranean_to_north_america_east',
        DISAGGREGATED_MEDITERRANEAN_TO_NORTH_AMERICA_WEST = 'disaggregated_mediterranean_to_north_america_west',
        DISAGGREGATED_NORTH_AMERICA_TO_AFRICA = 'disaggregated_north_america_to_africa',
        DISAGGREGATED_NORTH_AMERICA_TO_OCEANIA = 'disaggregated_north_america_to_oceania',
        DISAGGREGATED_NORTH_AMERICA_TO_SOUTH_AMERICA = 'disaggregated_north_america_to_south_america',
        DISAGGREGATED_NORTH_AMERICA_TO_MIDDLE_EAST = 'disaggregated_north_america_to_middle_east',
        DISAGGREGATED_NORTH_EUROPE_TO_NORTH_AMERICA_EAST = 'disaggregated_north_europe_to_north_america_east',
        DISAGGREGATED_NORTH_EUROPE_TO_NORTH_AMERICA_WEST = 'disaggregated_north_europe_to_north_america_west',
        DISAGGREGATED_SOUTH_AMERICA_TO_AFRICA = 'disaggregated_south_america_to_africa',
        DISAGGREGATED_INTRA_AFRICA = 'disaggregated_intra_africa',
        DISAGGREGATED_INTRA_NORTH_AMERICA = 'disaggregated_intra_north_america',
        DISAGGREGATED_INTRA_SOUTH_AMERICA = 'disaggregated_intra_south_america',
        DISAGGREGATED_SE_ASIA_TO_NE_ASIA = 'disaggregated_se_asia_to_ne_asia',
        DISAGGREGATED_INTRA_NE_ASIA = 'disaggregated_intra_ne_asia',
        DISAGGREGATED_INTRA_SE_ASIA = 'disaggregated_intra_se_asia',
        DISAGGREGATED_NORTH_EUROPE_TO_MEDITERRANEAN = 'disaggregated_north_europe_to_mediterranean',
        DISAGGREGATED_INTRA_MEDITERRANEAN = 'disaggregated_intra_mediterranean',
        DISAGGREGATED_INTRA_NORTH_EUROPE = 'disaggregated_intra_north_europe',
        DISAGGREGATED_INTRA_MIDDLE_EAST = 'disaggregated_intra_middle_east',
        DISAGGREGATED_OTHER = 'disaggregated_other',
    }
}
