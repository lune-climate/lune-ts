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
import type { EmissionFactorSource } from './EmissionFactorSource.js'
import type { MassUnit } from './MassUnit.js'

/**
 * An emission factors is a coefficient representing the amount of emissions per unit of activity, eg 0.354kgCO₂/USD.
 *
 * The `source` property describes what database the emission factor has been ingested from.
 *
 */
export type EmissionFactor = {
    /**
     * The emission factor unique identifier
     */
    id: string
    /**
     * The emission factor name
     */
    name: string
    source: EmissionFactorSource
    /**
     * Source version of the emission factor.
     */
    sourceVersion?: string
    /**
     * Publication year of the emission factor
     */
    publicationYear: number
    /**
     * Numerator unit of the emission factor
     */
    numeratorUnit: MassUnit
    /**
     * Denominator unit of the emission factor
     */
    denominatorUnit: EmissionFactorDenominatorUnit
    /**
     * Date of creation of the emission factor
     */
    createdAt: string
    /**
     * The name of the region that the emission factor covers.
     */
    region: string
}
