// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoadEmissionStandard } from './RoadEmissionStandard.js'
import type { RoadEmptyRunsFactor } from './RoadEmptyRunsFactor.js'
import type { RoadGradient } from './RoadGradient.js'
import type { RoadLoadFactor } from './RoadLoadFactor.js'
import type { RoadSituation } from './RoadSituation.js'

/**
 * Details about the parameters and calculations used in the methodology for estimating road emissions.
 *
 */
export type RoadMethodologyDetails = {
    /**
     * The vehicle's energy consumption for the journey.
     *
     * This value is a function of capacity utilisation.
     *
     */
    energyConsumption: {
        amount: string
        unit: RoadMethodologyDetails.unit
    }
    /**
     * The vehicle's capacity in tonnes.
     */
    vehicleCapacity: string
    loadFactor: RoadLoadFactor
    emptyRunsFactor: RoadEmptyRunsFactor
    emissionStandard: RoadEmissionStandard
    /**
     * The vehicle's capacity utilisation, which is a function of load factor and empty runs factor.
     *
     */
    capacityUtilisation: number
    situation: RoadSituation
    gradient: RoadGradient
}

export namespace RoadMethodologyDetails {
    export enum unit {
        MJ_TKM = 'MJ/tkm',
    }
}