// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregatedAnalyticsByProperty } from '../models/AggregatedAnalyticsByProperty.js'
import type { AnalyticsMetrics } from '../models/AnalyticsMetrics.js'
import type { CumulativeBundleAnalytics } from '../models/CumulativeBundleAnalytics.js'
import type { EmissionCalculationMetrics } from '../models/EmissionCalculationMetrics.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { SuccessResponse } from '../core/SuccessResponse.js'
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
    ): Promise<Result<SuccessResponse<CumulativeBundleAnalytics>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/cumulative-per-bundle',
            headers: {
                Accept: 'application/json',
            },
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
    ): Promise<Result<SuccessResponse<AnalyticsMetrics>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/metrics',
            headers: {
                Accept: 'application/json',
            },
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
    ): Promise<Result<SuccessResponse<AggregatedAnalyticsByProperty>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/aggregated-by-property',
            headers: {
                Accept: 'application/json',
            },
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
     * Get emission calculation metrics
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionCalculationMetrics OK
     */
    public getEmissionCalculationMetrics(
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
            /**
             * The time interval over which metrics should be aggregated.
             * Defaults to day if not specified.
             */
            interval?: 'day' | 'month'
            /**
             * When true, metrics will include data from all accounts in the organisation. When false, metrics will only include data from the API Key's default account.
             * Defaults to false.
             */
            allAccounts?: boolean
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<EmissionCalculationMetrics>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/analytics/emission-calculations',
            headers: {
                Accept: 'application/json',
            },
            query: {
                from: data?.from,
                through: data?.through,
                interval: data?.interval,
                all_accounts: data?.allAccounts,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
