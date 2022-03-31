/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetQuantitySeriesItem } from './OffsetQuantitySeriesItem'
import type { OffsetValueSeriesItem } from './OffsetValueSeriesItem'

export type Analytics = {
    /**
     * The total monetary value of all completed orders for a given interval.
     */
    totalCompletedOffsetValue: string
    /**
     * The total quantity in tCO2 of all completed orders for a given interval.
     */
    totalCompletedOffsetQuantity: string
    /**
     * The total monetary value of all placed orders for a given interval.
     */
    totalPlacedOffsetValue: string
    /**
     * The total quantity in tCO2 of all placed orders for a given interval.
     */
    totalPlacedOffsetQuantity: string
    /**
     * An array of offest values grouped by completion date.
     */
    completedOffsetValues: Array<OffsetValueSeriesItem>
    /**
     * An array of offest quantities grouped by completion date.
     */
    completedOffsetQuantities: Array<OffsetQuantitySeriesItem>
    /**
     * An array of offest values grouped by placed date.
     */
    placedOffsetValues: Array<OffsetValueSeriesItem>
    /**
     * An array of offest quantities grouped by placed date.
     */
    placedOffsetQuantities: Array<OffsetQuantitySeriesItem>
}
