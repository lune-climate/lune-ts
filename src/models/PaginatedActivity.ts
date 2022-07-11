/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity'
import type { PaginatedBase } from './PaginatedBase'

/**
 * Activity is presented in reverse order (most recent first).
 */
export type PaginatedActivity = PaginatedBase & {
    data: Array<Activity>
}
