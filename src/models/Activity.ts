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
     * * `order_allocated` The order has been allocated to projects.
     * * `order_cancelled` The order has been cancelled
     * * `order_allocation_retired` Carbon credits linked to a specific project have been retired
     * * `order_complete` All carbon credits linked to the order have been retired
     * * `order_failed` Order failed to process.
     *
     */
    source:
        | 'admin_credit'
        | 'admin_debit'
        | 'order_received'
        | 'order_placed'
        | 'order_paid'
        | 'order_allocated'
        | 'order_cancelled'
        | 'order_allocation_retired'
        | 'order_complete'
        | 'order_failed'
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
    balance_delta: string
    /**
     * The Account's outstanding balance at the time of this activity
     *
     * Unit: Account currency
     *
     */
    balance_outstanding: string
    /**
     * Account's outstanding balance delta.
     *
     * The previous outstanding balance plus `balance_outstanding_delta` equals the current outstanding balance.
     *
     * Unit: Account currency
     *
     */
    balance_outstanding_delta: string
    /**
     * Quantity of CO2 offsets linked to this activity (tonnes CO2)
     */
    quantity?: string
    /**
     * The order's unique identifier
     */
    order_id?: string
    /**
     * The project's unique identifier
     */
    project_id?: string
    /**
     * The project's name
     */
    project_name?: string
    /**
     * Activity creation timestamp
     */
    created_at: string
}
