/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountType } from '../models/AccountType.js'
import type { PublicSustainabilityPage } from '../models/PublicSustainabilityPage.js'
import type { SustainabilityPage } from '../models/SustainabilityPage.js'
import type { SustainabilityPageCustomDescription } from '../models/SustainabilityPageCustomDescription.js'
import type { SustainabilityPageDescription } from '../models/SustainabilityPageDescription.js'
import type { SustainabilityPageSections } from '../models/SustainabilityPageSections.js'
import type { SustainabilityPageSlug } from '../models/SustainabilityPageSlug.js'
import type { SustainabilityPageStatus } from '../models/SustainabilityPageStatus.js'
import type { SustainabilityPageTitle } from '../models/SustainabilityPageTitle.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class SustainabilityPageService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Create a sustainability page
     * Create a public https://sustainability.lune.co/<slug> page to communicate your climate impact efforts.
     * @param data Request data
     * @param options Additional operation options
     * @returns SustainabilityPage OK
     */
    public createSustainabilityPage(
        data: {
            status: SustainabilityPageStatus
            slug: SustainabilityPageSlug
            title: SustainabilityPageTitle
            sections: SustainabilityPageSections
            description?: SustainabilityPageDescription | string | null
            customDescription?: SustainabilityPageCustomDescription
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SustainabilityPage, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/sustainability-pages',
            body: {
                status: data?.status,
                slug: data?.slug,
                title: data?.title,
                description: data?.description,
                custom_description: data?.customDescription,
                sections: data?.sections,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update a sustainability page
     * Update the format, layout and status of your public https://sustainability.lune.co/<slug> page.
     * @param data Request data
     * @param options Additional operation options
     * @returns SustainabilityPage OK
     */
    public updateSustainabilityPage(
        data: {
            status: SustainabilityPageStatus
            slug: SustainabilityPageSlug
            title: SustainabilityPageTitle
            sections: SustainabilityPageSections
            description?: SustainabilityPageDescription | string | null
            customDescription?: SustainabilityPageCustomDescription
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SustainabilityPage, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/sustainability-pages',
            body: {
                status: data?.status,
                slug: data?.slug,
                title: data?.title,
                description: data?.description,
                custom_description: data?.customDescription,
                sections: data?.sections,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get the current account's sustainability page
     * Get the configuration of the current account's sustainability page.
     * @param options Additional operation options
     * @returns SustainabilityPage OK
     */
    public getSustainabilityPage(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<SustainabilityPage, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/sustainability-pages/current-account',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a sustainability page
     * Get the current account's public sustainability summary info.
     * @param type The type of the sustainability page.
     * @param slug The slug of the sustainability page.
     * @param options Additional operation options
     * @returns PublicSustainabilityPage OK
     */
    public getPublicSustainabilityPage(
        type: AccountType,
        slug: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PublicSustainabilityPage, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/sustainability-pages/{type}/{slug}',
            path: {
                type: type,
                slug: slug,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
