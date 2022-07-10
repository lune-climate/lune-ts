/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundlePercentageRequest } from '../models/BundlePercentageRequest.js'
import type { BundleSelection } from '../models/BundleSelection.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundleSelectionsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an account's bundle selection
     * Returns the account's bundle selection.
     *
     * When orders are placed without explicity setting bundle selections, the account's bundle selection is used.
     *
     * Account bundle selections can be set via the API or Dashboard.
     *
     * Every account is created with default bundle selections.
     *
     * @param options Additional operation options
     * @returns BundleSelection OK
     */
    public getBundleSelection(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<BundleSelection, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundle-selections',
            errors: {
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }

    /**
     * Update an account's bundle selection
     * Set the account's bundle selection.
     *
     * Every account is created with default bundle selections. This will override default bundle selections.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns BundleSelection OK
     */
    public updateBundleSelection(
        data: {
            bundleSelectionRequest: Array<BundlePercentageRequest>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<BundleSelection, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/bundle-selections',
            body: data?.bundleSelectionRequest,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                429: `Too Many Requests`,
            },
        })
    }
}
