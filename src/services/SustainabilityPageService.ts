/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SustainabilityPage } from '../models/SustainabilityPage.js'
import type { SustainabilityPageSection } from '../models/SustainabilityPageSection.js'

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
            /**
             * The sustainability page status which determines whether it is visible to the public.
             */
            status: 'enabled' | 'disabled'
            /**
             * The sustainability page slug. The slug is used to identify the page publicly and should be unique.
             */
            slug: string
            /**
             * The sustainability page title stat format.
             */
            title: 'by_volume' | 'by_price'
            /**
             * The sustainability page sections that will be displayed in the page. Only a single instance of each section type is allowed and the order is irrelevant.
             */
            sections: Array<SustainabilityPageSection>
            /**
             * The sustainability page description format consisting of stat equivalents or a custom description.
             */
            description?: 'by_equivalent' | 'by_supported_goals' | 'by_custom_description'
            /**
             * The sustainability page custom description. Only displayed when `description` is set to `by_custom_description`.
             */
            customDescription?: string
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
            /**
             * The sustainability page status which determines whether it is visible to the public.
             */
            status: 'enabled' | 'disabled'
            /**
             * The sustainability page slug. The slug is used to identify the page publicly and should be unique.
             */
            slug: string
            /**
             * The sustainability page title stat format.
             */
            title: 'by_volume' | 'by_price'
            /**
             * The sustainability page sections that will be displayed in the page. Only a single instance of each section type is allowed and the order is irrelevant.
             */
            sections: Array<SustainabilityPageSection>
            /**
             * The sustainability page description format consisting of stat equivalents or a custom description.
             */
            description?: 'by_equivalent' | 'by_supported_goals' | 'by_custom_description'
            /**
             * The sustainability page custom description. Only displayed when `description` is set to `by_custom_description`.
             */
            customDescription?: string
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
}
