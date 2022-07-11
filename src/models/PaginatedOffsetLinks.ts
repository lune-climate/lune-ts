/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetLink } from './OffsetLink'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedOffsetLinks = PaginatedBase & {
    data: Array<OffsetLink>
}
