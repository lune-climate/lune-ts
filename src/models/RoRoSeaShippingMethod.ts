/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoRoSeaShippingMethod = {
    vesselType: RoRoSeaShippingMethod.vessel_type
    fuel?: RoRoSeaShippingMethod.fuel
    load?: RoRoSeaShippingMethod.load
}

export namespace RoRoSeaShippingMethod {
    export enum vessel_type {
        SEA_RORO = 'sea_roro',
    }

    export enum fuel {
        HFO = 'HFO',
        MGO = 'MGO',
    }

    export enum load {
        FREIGHT_ONLY = 'freight_only',
        TRUCK_AND_TRAILER = 'truck_and_trailer',
        TRAILER_ONLY = 'trailer_only',
    }
}
