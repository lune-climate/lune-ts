/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OffsetLink } from '../models/OffsetLink'
import type { OffsetLinkAnalytics } from '../models/OffsetLinkAnalytics'
import type { OffsetLinkRequest } from '../models/OffsetLinkRequest'
import type { OffsetLinkUpdateRequest } from '../models/OffsetLinkUpdateRequest'
import type { PaginatedOffsetLinks } from '../models/PaginatedOffsetLinks'

import { ClientConfig } from '../core/ClientConfig'
import { request as __request } from '../core/request'
import { ApiError } from '../core/ApiError'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class OffsetLinksService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an offset link by id
     * @param id The offset links's unique identifier
     * @returns OffsetLink Offset link fetched successfully.
     * @throws ApiError
     */
    public getOffsetLinkById(id: string): Promise<Result<OffsetLink, ApiError>> {
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
     * @throws ApiError
     */
    public updateOffsetLinkById(
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
     * Get the existing offset links
     * @param limit Default is 10.
     * Maximum number of resources to return, between 1 and 100.
     * @param after A cursor for use in pagination.
     *
     * *after* is an object ID that defines your place in the list.
     *
     * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
     *
     * @returns PaginatedOffsetLinks Offset links fetched successfully.
     * @throws ApiError
     */
    public getOffsetLinks(
        limit?: string,
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
     * Create a new offset link
     * @param requestBody
     * @returns OffsetLink The offset link created successfully.
     * @throws ApiError
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
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get analytics for a given offset link
     * @param id The offset links's unique identifier
     * @returns OffsetLinkAnalytics Offset link analytics fetched successfully.
     * @throws ApiError
     */
    public getOffsetLinkAnalyticsById(id: string): Promise<Result<OffsetLinkAnalytics, ApiError>> {
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
