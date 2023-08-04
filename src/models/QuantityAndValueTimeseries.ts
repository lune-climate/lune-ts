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

/**
 * A timeseries of quantities and values.
 */
export type QuantityAndValueTimeseries = Array<{
    date: string
    value: string
    /**
     * Quantity of CO2 offsets linked to this activity (tonnes CO2)
     */
    quantity: string
}>
