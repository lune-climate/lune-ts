/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OffsetLink } from '../models/OffsetLink.js'
import type { OffsetLinkAnalytics } from '../models/OffsetLinkAnalytics.js'
import type { OffsetLinkRequest } from '../models/OffsetLinkRequest.js'
import type { OffsetLinkUpdateRequest } from '../models/OffsetLinkUpdateRequest.js'
import type { PaginatedOffsetLinks } from '../models/PaginatedOffsetLinks.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class OffsetLinksService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an offset link
     * @param id The offset links's unique identifier
     * @returns OffsetLink Offset link fetched successfully.
     */
    public getOffsetLink(id: string): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/offset-links/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The offset link does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Update an offset link
     * @param id The offset links's unique identifier
     * @param requestBody
     * @returns OffsetLink The offset link updated successfully.
     */
    public updateOffsetLink(
        id: string,
        requestBody: OffsetLinkUpdateRequest,
    ): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/offset-links/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `An offset link with the specified id belonging to the authenticated account has not been found.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * List offset links
     * @param limit Maximum number of resources to return, between 1 and 100.
     *
     * @param after A cursor for use in pagination.
     *
     * *after* is an object ID that defines your place in the list.
     *
     * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
     *
     * @returns PaginatedOffsetLinks Offset links fetched successfully.
     */
    public listOffsetLinks(
        limit: string = '10',
        after?: string,
    ): Promise<Result<PaginatedOffsetLinks, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/offset-links',
            query: {
                limit: limit,
                after: after,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create an offset link
     * @param requestBody
     * @returns OffsetLink The offset link created successfully.
     */
    public createOffsetLink(requestBody: OffsetLinkRequest): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/offset-links',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                409: `Conflict`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get offset link's analytics
     * @param id The offset links's unique identifier
     * @returns OffsetLinkAnalytics Offset link analytics fetched successfully.
     */
    public getOffsetLinkAnalytics(id: string): Promise<Result<OffsetLinkAnalytics, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/offset-links/{id}/analytics',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The offset link does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
