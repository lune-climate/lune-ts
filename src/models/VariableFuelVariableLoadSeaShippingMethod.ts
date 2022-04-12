/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VariableFuelVariableLoadSeaShippingMethod = {
    vesselType: VariableFuelVariableLoadSeaShippingMethod.vessel_type
    fuel?: VariableFuelVariableLoadSeaShippingMethod.fuel
    load?: VariableFuelVariableLoadSeaShippingMethod.load
}

export namespace VariableFuelVariableLoadSeaShippingMethod {
    export enum vessel_type {
        SEA_BULK_CARRIER_MEDIUM = 'sea_bulk_carrier_medium',
        SEA_BULK_CARRIER_LARGE = 'sea_bulk_carrier_large',
    }

    export enum fuel {
        HFO = 'HFO',
        MGO = 'MGO',
    }

    export enum load {
        AVERAGE = 'average',
        HEAVY = 'heavy',
    }
}
