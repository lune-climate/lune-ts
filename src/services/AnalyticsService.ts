/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedAnalyticsByProperty } from '../models/AggregatedAnalyticsByProperty.js'
import type { AnalyticsMetrics } from '../models/AnalyticsMetrics.js'
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
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get metrics
     * @param data Request data
     * @param options Additional operation options
     * @returns AnalyticsMetrics OK
     */
    public getMetrics(
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
    ): Promise<Result<AnalyticsMetrics, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/metrics',
            query: {
                from: data?.from,
                through: data?.through,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get aggregated analytics by property
     * @param data Request data
     * @param options Additional operation options
     * @returns AggregatedAnalyticsByProperty OK
     */
    public getAggregatedAnalyticsByProperty(
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
    ): Promise<Result<AggregatedAnalyticsByProperty, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/aggregated-by-property',
            query: {
                from: data?.from,
                through: data?.through,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
