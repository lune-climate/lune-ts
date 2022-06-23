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
    errorCode: Error.error_code
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

export namespace Error {
    /**
     * Immutable string representing a specific error.
     */
    export enum error_code {
        ACCOUNT_SUSPENDED = 'account_suspended',
        INVALID_SELECTED_ACCOUNT_ID = 'invalid_selected_account_id',
        BUNDLE_SELECTION_NOT_100_PCT = 'bundle_selection_not_100_pct',
        ALL_BUNDLES_MUST_BE_ENABLED = 'all_bundles_must_be_enabled',
        ORDER_IDEMPOTENCY_FAILURE = 'order_idempotency_failure',
        ORDER_QUANTITY_NON_POSITIVE = 'order_quantity_non_positive',
        INVALID_BUNDLE_ID = 'invalid_bundle_id',
        INVALID_ID = 'invalid_id',
        STANDARD_TEST_ACCOUNT_NAME_UPDATE_DISALLOWED = 'standard_test_account_name_update_disallowed',
        VALIDATION_ERROR = 'validation_error',
        PERCENTAGE_ALL_OR_NONE = 'percentage_all_or_none',
        ADDRESS_NOT_FOUND = 'address_not_found',
        AT_LEAST_ONE_CONSTRAINT_REQUIRED = 'at_least_one_constraint_required',
        BUNDLES_SIZE_NOT_SUPPORTED = 'bundles_size_not_supported',
        WEBHOOK_LIMIT_REACHED = 'webhook_limit_reached',
        INVALID_TIME_RANGE = 'invalid_time_range',
        EXCHANGE_RATE_NOT_FOUND = 'exchange_rate_not_found',
        LIVE_ACCOUNT_REQUIRED = 'live_account_required',
        ORGANISATION_NOT_FOUND = 'organisation_not_found',
        UNAUTHORISED = 'unauthorised',
        ESTIMATE_NOT_FOUND = 'estimate_not_found',
        ESTIMATE_ORDER_ALREADY_PLACED = 'estimate_order_already_placed',
    }
}
