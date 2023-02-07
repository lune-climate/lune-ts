/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderAllocation } from './OrderAllocation'

export type AllocationEventDetails = {
    /**
     * Snapshot of the allocation at the time of the event
     */
    allocation: OrderAllocation
    /**
     * Original allocation that triggered the split
     */
    splitFrom?: OrderAllocation
}
