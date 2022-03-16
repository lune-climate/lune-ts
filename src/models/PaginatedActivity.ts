/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedActivity = PaginatedBase & {
    /**
     * Paginated Activity objects
     */
    data: Array<Activity>
}
