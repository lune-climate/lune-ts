/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Activity = {
    /**
     * The activity's unique identifier
     */
    id: string
    /**
     * Account currency code.
     *
     * All activity rows amount are relative to the account's currency.
     *
     */
    currency: string
    /**
     * The source event that has yielded the activity.
     *
     * * `admin_credit` The account has been credited by Lune.
     * * `admin_debit` The account has been debited by Lune.
     * * `order_received` The account has placed an order and Lune has received it.
     * * `order_placed` An order has been matched to bundles. Quantites and costs are known and have been set.
     * * `order_paid` The order has been paid for.
     * * `order_retiring` Lune has started retiring the order's carbon offsets.
     * * `order_cancelled` The order has been cancelled
     * * `order_allocation_retired` Carbon credits linked to a specific project have been retired
     * * `order_complete` All carbon credits linked to the order have been retired
     * * `order_failed` Order failed to process.
     *
     */
    source: Activity.source
    /**
     * Account's cash balance at the time of this activity
     *
     * Unit: Account currency
     *
     */
    balance: string
    /**
     * Account's cash balance delta.
     *
     * The previous balance plus `balance_delta` equals the current balance.
     *
     * Unit: Account currency
     *
     */
    balanceDelta: string
    /**
     * The Account's outstanding balance at the time of this activity
     *
     * Unit: Account currency
     *
     */
    balanceOutstanding: string
    /**
     * Account's outstanding balance delta.
     *
     * The previous outstanding balance plus `balance_outstanding_delta` equals the current outstanding balance.
     *
     * Unit: Account currency
     *
     */
    balanceOutstandingDelta: string
    /**
     * Quantity of CO2 offsets linked to this activity (tonnes CO2)
     */
    quantity?: string
    /**
     * The order's unique identifier
     */
    orderId?: string
    /**
     * The project's unique identifier
     */
    projectId?: string
    /**
     * The project's name
     */
    projectName?: string
    /**
     * Activity creation timestamp
     */
    createdAt: string
}

export namespace Activity {
    /**
     * The source event that has yielded the activity.
     *
     * * `admin_credit` The account has been credited by Lune.
     * * `admin_debit` The account has been debited by Lune.
     * * `order_received` The account has placed an order and Lune has received it.
     * * `order_placed` An order has been matched to bundles. Quantites and costs are known and have been set.
     * * `order_paid` The order has been paid for.
     * * `order_retiring` Lune has started retiring the order's carbon offsets.
     * * `order_cancelled` The order has been cancelled
     * * `order_allocation_retired` Carbon credits linked to a specific project have been retired
     * * `order_complete` All carbon credits linked to the order have been retired
     * * `order_failed` Order failed to process.
     *
     */
    export enum source {
        ADMIN_CREDIT = 'admin_credit',
        ADMIN_DEBIT = 'admin_debit',
        ORDER_RECEIVED = 'order_received',
        ORDER_PLACED = 'order_placed',
        ORDER_PAID = 'order_paid',
        ORDER_RETIRING = 'order_retiring',
        ORDER_CANCELLED = 'order_cancelled',
        ORDER_ALLOCATION_RETIRED = 'order_allocation_retired',
        ORDER_COMPLETE = 'order_complete',
        ORDER_FAILED = 'order_failed',
    }
}
