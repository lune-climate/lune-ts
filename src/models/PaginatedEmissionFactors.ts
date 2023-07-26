/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmissionFactor } from './EmissionFactor'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedEmissionFactors = PaginatedBase & {
    /**
     * An array of Emission Factor objects, ordered by best match.
     *
     * Part of a paginated response.
     *
     */
    data: Array<EmissionFactor>
}
