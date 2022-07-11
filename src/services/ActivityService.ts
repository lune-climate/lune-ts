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
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedActivity OK
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
                401: `Unauthorized.`,
                429: `Too Many Requests`,
            },
        })
    }
}
