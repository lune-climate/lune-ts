/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundleMix } from '../models/BundleMix.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundleMixesService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List all bundle mixes
     * @param options Additional operation options
     * @returns BundleMix OK
     */
    public listAllBundleMixes(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<Array<BundleMix>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundle-mixes',
            errors: {
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
