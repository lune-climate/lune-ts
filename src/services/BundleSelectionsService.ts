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
import type { BundlePercentageRequest } from '../models/BundlePercentageRequest.js'
import type { BundleSelection } from '../models/BundleSelection.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { SuccessResponse } from '../core/SuccessResponse.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundleSelectionsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an account's bundle selection
     * @param options Additional operation options
     * @returns BundleSelection OK
     */
    public getBundleSelection(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<SuccessResponse<BundleSelection>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundle-selections',
            headers: {
                Accept: 'application/json',
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update an account's bundle selection
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
    ): Promise<Result<SuccessResponse<BundleSelection>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/bundle-selections',
            headers: {
                Accept: 'application/json',
            },
            body: data?.bundleSelectionRequest,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                413: `The request is larger than 100kB.`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
