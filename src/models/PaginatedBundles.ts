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

import type { Bundle } from './Bundle.js'
import type { PaginatedBase } from './PaginatedBase.js'

export type PaginatedBundles = PaginatedBase & {
    /**
     * An array of Bundle objects.
     *
     * Part of a paginated response.
     *
     */
    data: Array<Bundle>
}
