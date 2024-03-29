// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginatedBase } from './PaginatedBase.js'
import type { Project } from './Project.js'

export type PaginatedProjects = PaginatedBase & {
    /**
     * An array of Project objects.
     *
     * Part of a paginated response.
     *
     */
    data: Array<Project>
}
