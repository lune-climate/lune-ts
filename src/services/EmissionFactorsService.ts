/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmissionFactorLogicalUnit } from '../models/EmissionFactorLogicalUnit.js'
import type { EmissionFactorRegions } from '../models/EmissionFactorRegions.js'
import type { EmissionFactorSource } from '../models/EmissionFactorSource.js'
import type { PaginatedEmissionFactors } from '../models/PaginatedEmissionFactors.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class EmissionFactorsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List emission factors
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedEmissionFactors OK
     */
    public listEmissionFactors(
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
             * Filter emission factors based on name (case insensitive).
             * The value can appear at any position.
             *
             */
            name?: string
            /**
             * Filter emission factors based on source.
             * When omitted, all sources are returned.
             *
             */
            source?: Array<EmissionFactorSource>
            /**
             * Filter emission factors based on the publication year.
             */
            publicationYear?: Array<number>
            /**
             * Filter emission factors based on region (case insensitive).
             * The value must be an exact match.
             * When omitted, all regions are returned.
             *
             * Countries are included in regions but there are also broader geographic regions like Europe or Asia.
             *
             */
            region?: Array<string>
            /**
             * Filter emission factors based on the logical unit.
             * When omitted, all units are returned.
             *
             */
            unit?: EmissionFactorLogicalUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedEmissionFactors, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/emission-factors',
            query: {
                limit: data?.limit,
                after: data?.after,
                name: data?.name,
                source: data?.source,
                publication_year: data?.publicationYear,
                region: data?.region,
                unit: data?.unit,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * List all emission factor regions
     * @param options Additional operation options
     * @returns EmissionFactorRegions OK
     */
    public listAllEmissionFactorRegions(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<EmissionFactorRegions, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/emission-factors/regions',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
