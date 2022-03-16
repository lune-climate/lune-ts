/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bundle } from './Bundle'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedBundles = PaginatedBase & {
    /**
     * Paginated Bundle objects
     */
    data: Array<Bundle>
}
