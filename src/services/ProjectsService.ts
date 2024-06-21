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
import type { PaginatedProjects } from '../models/PaginatedProjects.js'
import type { Project } from '../models/Project.js'
import type { ProjectPerimeter } from '../models/ProjectPerimeter.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { SuccessResponse } from '../core/SuccessResponse.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class ProjectsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List projects
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedProjects OK
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
             * When `recently_disabled` is set to true, the response will also include projects which have been disabled in the last 30 days.
             */
            recentlyDisabled?: boolean
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<PaginatedProjects>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects',
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
     * Get a project
     * @param id The project's unique identifier
     * @param options Additional operation options
     * @returns Project OK
     */
    public getProject(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<Project>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a project's perimeter
     * @param id The project's unique identifier
     * @param options Additional operation options
     * @returns ProjectPerimeter OK
     */
    public getProjectPerimeter(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<ProjectPerimeter>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects/{id}/perimeter',
            path: {
                id: id,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a project by slug
     * @param slug The project's unique slug
     * @param options Additional operation options
     * @returns Project OK
     */
    public getProjectBySlug(
        slug: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<Project>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/projects/by-slug/{slug}',
            path: {
                slug: slug,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
