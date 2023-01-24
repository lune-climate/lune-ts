/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundlePortfolio } from '../models/BundlePortfolio.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundlePortfoliosService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List all bundle portfolios
     * @param options Additional operation options
     * @returns BundlePortfolio OK
     */
    public listAllBundlePortfolios(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<Array<BundlePortfolio>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundle-portfolios',
            errors: {
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update an account's bundle portfolio
     * @param data Request data
     * @param options Additional operation options
     * @returns BundlePortfolio OK
     */
    public updateBundlePortfolio(
        data: {
            bundlePortfolioId: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<BundlePortfolio, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/bundle-portfolios',
            body: {
                bundle_portfolio_id: data?.bundlePortfolioId,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
