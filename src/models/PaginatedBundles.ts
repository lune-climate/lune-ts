/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bundle } from './Bundle'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedBundles = PaginatedBase & {
    /**
     * An array of Bundle objects.
     *
     * Part of a paginated response.
     *
     */
    data: Array<Bundle>
}
