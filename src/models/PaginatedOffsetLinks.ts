/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetLink } from './OffsetLink'
import type { PaginatedBase } from './PaginatedBase'

export type PaginatedOffsetLinks = PaginatedBase & {
    /**
     * Paginated Offset Links
     */
    data: Array<OffsetLink>
}
