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

import type { EmissionFactor } from './EmissionFactor.js'
import type { GasEmissions } from './GasEmissions.js'
import type { NullEnum } from './NullEnum.js'

export type EmissionFactorWithGasEmissions = EmissionFactor & {
    /**
     * Detailed information about the gas emissions.
     *
     * This property is always set as of March 2024.
     *
     */
    gasEmissions: GasEmissions | NullEnum
}
