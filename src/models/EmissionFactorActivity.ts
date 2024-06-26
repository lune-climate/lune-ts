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

import type { EmissionFactorDenominatorUnit } from './EmissionFactorDenominatorUnit.js'

export type EmissionFactorActivity = {
    /**
     * The quantity of the activity being measured.
     *
     * For example, if you using the `Basic iron and steel and of ferro-alloys and first products thereof` emission factor to estimate
     * the emission of $1000 of steel pipe. Pass `"1000"` as value.
     *
     */
    value: string
    /**
     * The units of the activity being measured.
     *
     * This property must be equal or compatible with the emission factor's denominator.
     *
     * For example, if you using the `Basic iron and steel and of ferro-alloys and first products thereof` emission factor, which has an intensity of `0.738411878489 kgCO2e/EUR`
     * to estimate the emission of $1000 of steel pipe. Pass `"USD"` as unit.
     * Where possible, we apply a conversion factor to the unit.
     *
     */
    unit: EmissionFactorDenominatorUnit
}
