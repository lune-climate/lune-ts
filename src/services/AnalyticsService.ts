/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Analytics } from '../models/Analytics.js'
import type { CumulativeBundleAnalytics } from '../models/CumulativeBundleAnalytics.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class AnalyticsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an account analytics
     * @param data Request data
     * @param options Additional operation options
     * @returns Analytics OK
     */
    public getAnalytics(
        data?: {
            /**
             * The start date of the custom date range.
             * Defaults to 30 days ago if not specified.
             */
            start?: string
            /**
             * The end date of the custom date range.
             * Defaults to the current date if not specified.
             */
            end?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Analytics, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics',
            query: {
                start: data?.start,
                end: data?.end,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }

    /**
     * Get cumulative analytics
     * @param data Request data
     * @param options Additional operation options
     * @returns CumulativeBundleAnalytics OK
     */
    public getCumulativeAnalyticsPerBundle(
        data?: {
            /**
             * The start date of the custom date range.
             * Defaults to 30 days ago if not specified.
             */
            from?: string
            /**
             * The to (inclusive) date of the custom date range.
             * Defaults to the current date if not specified.
             */
            through?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<CumulativeBundleAnalytics, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/cumulative-per-bundle',
            query: {
                from: data?.from,
                through: data?.through,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }
}
