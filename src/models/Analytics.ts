/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OffsetQuantitySeriesItem } from './OffsetQuantitySeriesItem'
import type { OffsetValueSeriesItem } from './OffsetValueSeriesItem'

export type Analytics = {
    /**
     * The total monetary value of all completed orders for a given interval.
     */
    total_completed_offset_value: string
    /**
     * The total quantity in tCO2 of all completed orders for a given interval.
     */
    total_completed_offset_quantity: string
    /**
     * The total monetary value of all placed orders for a given interval.
     */
    total_placed_offset_value: string
    /**
     * The total quantity in tCO2 of all placed orders for a given interval.
     */
    total_placed_offset_quantity: string
    /**
     * An array of offest values grouped by completion date.
     */
    completed_offset_values: Array<OffsetValueSeriesItem>
    /**
     * An array of offest quantities grouped by completion date.
     */
    completed_offset_quantities: Array<OffsetQuantitySeriesItem>
    /**
     * An array of offest values grouped by placed date.
     */
    placed_offset_values: Array<OffsetValueSeriesItem>
    /**
     * An array of offest quantities grouped by placed date.
     */
    placed_offset_quantities: Array<OffsetQuantitySeriesItem>
}
