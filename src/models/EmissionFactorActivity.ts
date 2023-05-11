/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionFactorDenominatorUnit } from './EmissionFactorDenominatorUnit'

export type EmissionFactorActivity = {
    /**
     * The quantity of the activity being measured
     */
    value: string
    /**
     * The units of the activity being measured
     */
    unit: EmissionFactorDenominatorUnit
}
