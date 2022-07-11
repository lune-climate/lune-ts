/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Mass } from './Mass'

/**
 * An emission estimate result. The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
 */
export type EmissionEstimate = {
    mass: Mass
}
