/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VariableFuelSeaShippingMethod = {
    vesselType: VariableFuelSeaShippingMethod.vessel_type
    fuel?: VariableFuelSeaShippingMethod.fuel
}

export namespace VariableFuelSeaShippingMethod {
    export enum vessel_type {
        SEA_OIL_TANKER_SMALL = 'sea_oil_tanker_small',
        SEA_OIL_TANKER_MEDIUM = 'sea_oil_tanker_medium',
        SEA_OIL_TANKER_LARGE = 'sea_oil_tanker_large',
        SEA_GENERAL_CARGO_SMALL = 'sea_general_cargo_small',
        SEA_GENERAL_CARGO_LARGE = 'sea_general_cargo_large',
        SEA_BULK_CARRIER_SMALL = 'sea_bulk_carrier_small',
        SEA_ROPAX = 'sea_ropax',
    }

    export enum fuel {
        HFO = 'HFO',
        MGO = 'MGO',
    }
}
