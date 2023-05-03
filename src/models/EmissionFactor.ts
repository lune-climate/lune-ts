/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionFactorDenominatorUnit } from './EmissionFactorDenominatorUnit'
import type { EmissionFactorSource } from './EmissionFactorSource'
import type { GasEmissions } from './GasEmissions'
import type { MassUnit } from './MassUnit'

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
     * Publication year of the emission factor
     */
    publicationYear: number
    /**
     * Detailed information about the gas emissions
     */
    gasEmissions: GasEmissions
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
