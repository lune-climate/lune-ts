/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginatedBase } from './PaginatedBase'
import type { Project } from './Project'

export type PaginatedProjects = PaginatedBase & {
    /**
     * An array of Project objects.
     *
     * Part of a paginated response.
     *
     */
    data: Array<Project>
}
