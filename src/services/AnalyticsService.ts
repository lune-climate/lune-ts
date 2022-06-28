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
     * Get analytics
     * Returns analytics for a specified time period for the account linked to the API Key.
     *
     * Defaults to the last 30 days if no time period is specified.
     *
     * @param start The start date of the custom date range.
     * The date must be in the format YYYY-MM-DD.
     * @param end The end date of the custom date range.
     * The date must be in the format YYYY-MM-DD.
     * @returns Analytics The response return account analytics
     */
    public getAnalytics(start?: string, end?: string): Promise<Result<Analytics, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/analytics',
            query: {
                start: start,
                end: end,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get cumulative analytics
     * Calculate cumulative volume and cost analytics per bundle
     *
     * @param from The start date of the custom date range.
     * @param through The to (inclusive) date of the custom date range.
     * @returns CumulativeBundleAnalytics Cumulative analytics per bundle
     */
    public getCumulativeAnalyticsPerBundle(
        from?: string,
        through?: string,
    ): Promise<Result<CumulativeBundleAnalytics, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/analytics/cumulative-per-bundle',
            query: {
                from: from,
                through: through,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
