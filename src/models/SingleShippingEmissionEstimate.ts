/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { EmissionEstimate } from './EmissionEstimate'

export type SingleShippingEmissionEstimate = EmissionEstimate & {
    distance: Distance
}
