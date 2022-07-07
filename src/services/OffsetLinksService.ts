/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Money } from '../models/Money.js'
import type { OffsetLink } from '../models/OffsetLink.js'
import type { OffsetLinkAnalytics } from '../models/OffsetLinkAnalytics.js'
import type { PaginatedOffsetLinks } from '../models/PaginatedOffsetLinks.js'
import type { Timestamp } from '../models/Timestamp.js'

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
     * @param options Additional operation options
     * @returns OffsetLink Offset link fetched successfully.
     */
    public getOffsetLink(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, options || {}, {
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
     * @param data Request data
     * @param options Additional operation options
     * @returns OffsetLink The offset link updated successfully.
     */
    public updateOffsetLink(
        id: string,
        data: {
            /**
             * Offset link name.
             *
             * This is a human readable name to recognise and distingish different offset links.
             *
             */
            name: string
            /**
             * Whether to include the Offset link logo (defined in Account settings) in the footer.
             *
             */
            useLogo: boolean
            /**
             * Offset link title
             *
             * This is the title that appears on the first screen of the offset links flow.
             *
             */
            title?: string
            /**
             * Offset link description
             *
             * This is the description that appears on the first screen of the offset links flow.
             *
             */
            description?: string
            /**
             * The bundle ids selected for use through the particular offset link.
             */
            bundles?: Array<string>
            value?: Money
            /**
             * The email addresses of users that are allowed to use the offset link.
             */
            emails?: Array<string>
            expiresAt?: Timestamp
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/offset-links/{id}',
            path: {
                id: id,
            },
            body: {
                name: data?.name,
                title: data?.title,
                description: data?.description,
                bundles: data?.bundles,
                value: data?.value,
                emails: data?.emails,
                expires_at: data?.expiresAt,
                use_logo: data?.useLogo,
            },
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
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedOffsetLinks Offset links fetched successfully.
     */
    public listOffsetLinks(
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
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedOffsetLinks, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/offset-links',
            query: {
                limit: data?.limit,
                after: data?.after,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create an offset link
     * @param data Request data
     * @param options Additional operation options
     * @returns OffsetLink The offset link created successfully.
     */
    public createOffsetLink(
        data: {
            /**
             * Offset link name.
             *
             * This is a human readable name to recognise and distingish different offset links.
             *
             */
            name: string
            /**
             * Whether to include the Offset link logo (defined in Account settings) in the footer.
             *
             */
            useLogo: boolean
            /**
             * Offset link title
             *
             * This is the title that appears on the first screen of the offset links flow.
             *
             */
            title?: string
            /**
             * Offset link description
             *
             * This is the description that appears on the first screen of the offset links flow.
             *
             */
            description?: string
            /**
             * The bundle ids selected for use through the particular offset link.
             */
            bundles?: Array<string>
            value?: Money
            /**
             * The email addresses of users that are allowed to use the offset link.
             */
            emails?: Array<string>
            expiresAt?: Timestamp
            /**
             * If true, the user of the Offset Link is required to pay by credit/debit card.
             * This value cannot be updated once the offset link has been created.
             *
             */
            requirePayment?: boolean
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<OffsetLink, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/offset-links',
            body: {
                name: data?.name,
                title: data?.title,
                description: data?.description,
                bundles: data?.bundles,
                value: data?.value,
                emails: data?.emails,
                expires_at: data?.expiresAt,
                use_logo: data?.useLogo,
                require_payment: data?.requirePayment,
            },
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
     * @param options Additional operation options
     * @returns OffsetLinkAnalytics Offset link analytics fetched successfully.
     */
    public getOffsetLinkAnalytics(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<OffsetLinkAnalytics, ApiError>> {
        return __request(this.client, this.config, options || {}, {
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
