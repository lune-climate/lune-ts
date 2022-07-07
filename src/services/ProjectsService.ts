/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Bundle } from '../models/Bundle.js'
import type { PaginatedBundles } from '../models/PaginatedBundles.js'
import type { PaginatedProjects } from '../models/PaginatedProjects.js'
import type { Project } from '../models/Project.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class ProjectsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List bundles
     * Returns paginated bundles.
     *
     * Bundle represent a group of projects of similar unit price and characteristics.
     *
     * Orders are placed against bundles.
     *
     * Disabled bundles are not returned unless `recently_disabled` is used.
     * Disabled bundle projects are not returned unless `recently_disabled` is used.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedBundles The response returns paginated bundles
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
             * Default is false.
             * Omitting or setting recently_disabled to false has the same effect.
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
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get a bundle
     * Returns a bundle by id if it exists.
     *
     * Bundle represent a group of projects of similar unit price and characteristics.
     *
     * Orders are placed against bundles.
     *
     * @param id The bundle's unique identifier
     * @param options Additional operation options
     * @returns Bundle The response returns a bundle
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
                404: `The bundle does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * List projects
     * Returns paginated projects.
     *
     * Disabled projects are not returned unless `recently_disabled` is used.
     * Disabled project bundles are not returned unless `recently_disabled` is used.
     *
     * Note: orders are placed against bundles not projects.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedProjects The response returns paginated projects
     */
    public listProjects(
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
             * Default is false.
             * Omitting or setting recently_disabled to false has the same effect.
             */
            recentlyDisabled?: boolean
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedProjects, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects',
            query: {
                limit: data?.limit,
                after: data?.after,
                recently_disabled: data?.recentlyDisabled,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get a project
     * Returns a project by id if it exists.
     *
     * Disabled projects are returned.
     *
     * @param id The project's unique identifier
     * @param options Additional operation options
     * @returns Project The response returns a project
     */
    public getProject(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Project, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `The project does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get a project by slug
     * Returns a project by slug if it exists.
     *
     * Disabled projects are returned.
     *
     * @param slug The project's unique slug
     * @param options Additional operation options
     * @returns Project The response returns a project
     */
    public getProjectBySlug(
        slug: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Project, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects/by-slug/{slug}',
            path: {
                slug: slug,
            },
            errors: {
                404: `The project does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
