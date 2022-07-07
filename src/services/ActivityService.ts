/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedActivity } from '../models/PaginatedActivity.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class ActivityService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an account's activity
     * Returns paginated activity in reverse order (most recent first).
     *
     * Activity is an immutable event log. Every single account event yields an activity object.
     *
     * The API key used to access this method affects what activity rows are returned: activity rows
     * corresponding to test orders for the test API key, the rest of the rows (both activity rows
     * corresponding to live orders or not having any order associated with them) for the live API key.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedActivity The response returns paginated activity
     */
    public getActivity(
        data?: {
            /**
             * Maximum number of resources to return, between 1 and 100.
             *
             */
            limit?: string
            /**
             * A cursor for use in pagination.
             *
             * *after* is an object ID that defines your place in the list.
             *
             * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
             *
             */
            after?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedActivity, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/activity',
            query: {
                limit: data?.limit,
                after: data?.after,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
