/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HugeOilTankerSeaShippingMethod = {
    vesselType: HugeOilTankerSeaShippingMethod.vessel_type
    fuel?: HugeOilTankerSeaShippingMethod.fuel
}

export namespace HugeOilTankerSeaShippingMethod {
    export enum vessel_type {
        SEA_OIL_TANKER_HUGE = 'sea_oil_tanker_huge',
    }

    export enum fuel {
        HFO = 'HFO',
        MGO = 'MGO',
        LNG = 'LNG',
    }
}
