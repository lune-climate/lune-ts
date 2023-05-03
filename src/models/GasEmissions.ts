/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GasEmissions = {
    /**
     * Amount of CO₂ equivalent gas. All gas emissions are accounted here.
     */
    co2E: string
    /**
     * Amount of CO₂ gas.
     */
    co2?: string
    /**
     * Amount of methane gas.
     */
    methane?: string
    /**
     * Amount of nitrous oxide gas.
     */
    nitrousOxide?: string
    /**
     * Amount of other greenhouse gases.
     */
    other?: string
}
