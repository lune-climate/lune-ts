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
import type { Bundle } from '../models/Bundle.js'
import type { PaginatedBundles } from '../models/PaginatedBundles.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundlesService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List bundles
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedBundles OK
     */
    public listBundles(
        data?: {
            /**
             * Maximum number of resources to return, between 1 and 100.
             *
             */
            limit?: string
            /**
             * A cursor for use in pagination.
             *
             * *after* is an object ID that defines your place in the list.
             *
             * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
             *
             */
            after?: string
            /**
             * When `recently_disabled` is set to true, the response will also include bundles which have been disabled in the last 30 days.
             */
            recentlyDisabled?: boolean
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedBundles, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundles',
            query: {
                limit: data?.limit,
                after: data?.after,
                recently_disabled: data?.recentlyDisabled,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a bundle
     * @param id The bundle's unique identifier
     * @param options Additional operation options
     * @returns Bundle OK
     */
    public getBundle(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Bundle, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/bundles/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
