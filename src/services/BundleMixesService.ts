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
     * Get bundle mixes
     * Returns bundle mixes.
     *
     * Bundle mixes are predefined bundle selections, for example following Oxford Offsetting Principles.
     * Bundle selection for a particular Bundle mix may change over time.
     *
     * @returns BundleMix The response returns the bundle mixes
     */
    public getBundleMixes(): Promise<Result<Array<BundleMix>, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/bundle-mixes',
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
