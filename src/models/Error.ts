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
        BUNDLE_SELECTION_RATIOS_INVALID = 'bundle_selection_ratios_invalid',
        BUNDLE_SELECTION_BUNDLE_INVALID = 'bundle_selection_bundle_invalid',
        ORDER_IDEMPOTENCY_ALREADY_EXISTS = 'order_idempotency_already_exists',
        ORDER_QUANTITY_INVALID = 'order_quantity_invalid',
        BUNDLE_ID_INVALID = 'bundle_id_invalid',
        ID_INVALID = 'id_invalid',
        TEST_ACCOUNT_NAME_UPDATE_DISALLOWED = 'test_account_name_update_disallowed',
        VALIDATION_ERROR = 'validation_error',
        BUNDLE_SELECTION_RATIOS_INVALID_FORMAT = 'bundle_selection_ratios_invalid_format',
        ADDRESS_NOT_FOUND = 'address_not_found',
        PORT_NOT_FOUND = 'port_not_found',
        LOCODE_NOT_FOUND = 'locode_not_found',
        AIRPORT_INVALID = 'airport_invalid',
        OFFSET_LINK_CONSTRAINT_REQUIRED = 'offset_link_constraint_required',
        OFFSET_LINK_BUNDLES_SIZE_INVALID = 'offset_link_bundles_size_invalid',
        WEBHOOK_LIMIT_REACHED = 'webhook_limit_reached',
        TIME_RANGE_INVALID = 'time_range_invalid',
        EXCHANGE_RATE_NOT_FOUND = 'exchange_rate_not_found',
        LIVE_ACCOUNT_REQUIRED = 'live_account_required',
        UNAUTHORISED = 'unauthorised',
        ESTIMATE_NOT_FOUND = 'estimate_not_found',
        ESTIMATE_ORDER_ALREADY_PLACED = 'estimate_order_already_placed',
        SUSTAINABILITY_PAGE_SLUG_NOT_UNIQUE = 'sustainability_page_slug_not_unique',
        SUSTAINABILITY_PAGE_EXISTS = 'sustainability_page_exists',
        PAGINATION_LIMIT_INVALID = 'pagination_limit_invalid',
        UNSUPPORTED_IMAGE_FORMAT = 'unsupported_image_format',
        SOURCE_LOCATION_CODE_INVALID = 'source_location_code_invalid',
        DESTINATION_LOCATION_CODE_INVALID = 'destination_location_code_invalid',
        EMISSION_FACTOR_ID_INVALID = 'emission_factor_id_invalid',
        EMISSION_FACTOR_UNIT_MISMATCH = 'emission_factor_unit_mismatch',
    }
}
