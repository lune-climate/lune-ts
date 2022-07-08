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
     * Returns bundle mixes.
     *
     * Bundle mixes are predefined bundle selections, for example following Oxford Offsetting Principles.
     * Bundle selection for a particular Bundle mix may change over time.
     *
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
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }
}
