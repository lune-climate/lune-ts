/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionFactor } from './EmissionFactor'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedEmissionFactors = PaginatedBase & {
    /**
     * Paginated emission factor objects ordered by match probability.
     */
    data: Array<EmissionFactor>
}
