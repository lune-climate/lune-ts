/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginatedBase } from './PaginatedBase'
import type { Project } from './Project'

export type PaginatedProjects = PaginatedBase & {
    data: Array<Project>
}
