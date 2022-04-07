/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Individual error information
 */
export type Error = {
    /**
     * Immutable string representing a specific error.
     */
    errorCode:
        | 'account_suspended'
        | 'invalid_selected_account_id'
        | 'bundle_selection_not_100_pct'
        | 'order_idempotency_failure'
        | 'order_low_volume_no_split'
        | 'invalid_bundle_id'
        | 'invalid_id'
        | 'validation_error'
        | 'percentage_all_or_none'
        | 'address_not_found'
        | 'at_least_one_constraint_required'
        | 'bundles_size_not_supported'
        | 'unknown_imo_number'
        | 'webhook_limit_reached'
        | 'invalid_time_range'
        | 'exchange_rate_not_found'
        | 'live_account_required'
    /**
     * Human readable error message.
     *
     * This value can contain some extra information about the error in
     * human-readable form. Not suitable for programmatic consumption, the format
     * is not guaranteed to be stable.
     *
     */
    message: string
}
