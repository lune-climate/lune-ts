/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'

export type OrderByEstimate = OrderBase & {
    /**
     * The emission calculation unique identifier
     */
    estimateId: string
}
