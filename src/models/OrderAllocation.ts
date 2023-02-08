/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderAllocation = {
    /**
     * The allocation's unique identifier
     */
    id: string
    /**
     * The order's unique identifier
     */
    orderId: string
    /**
     * The project's unique identifier
     */
    projectId: string
    quantity: string
    /**
     * Allocation status
     */
    status: OrderAllocation.status
    /**
     * Allocation creation timestamp
     */
    createdAt: string
}

export namespace OrderAllocation {
    /**
     * Allocation status
     */
    export enum status {
        NEW = 'new',
        RETIRED = 'retired',
    }
}
