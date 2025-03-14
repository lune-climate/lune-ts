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
import type { Url } from '../models/Url.js'
import type { Webhook } from '../models/Webhook.js'
import type { WebhookFullSecret } from '../models/WebhookFullSecret.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { SuccessResponse } from '../core/SuccessResponse.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class WebhooksService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * List all webhooks
     * @param data Request data
     * @param options Additional operation options
     * @returns Webhook OK
     */
    public listAllWebhooks(
        data?: {
            /**
             * Filter by account identifiers: return webhooks which push events for the given account identifiers.
             *
             */
            accountId?: Array<string>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<Array<Webhook>>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/webhooks',
            headers: {
                Accept: 'application/json',
            },
            query: {
                account_id: data?.accountId,
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Create a webhook
     * @param data Request data
     * @param options Additional operation options
     * @returns WebhookFullSecret OK
     */
    public createWebhook(
        data: {
            url: Url
            /**
             * The created webhook will exclusively push events which belong to the given account identifiers.
             *
             * Act as a filter: if not set, events belonging to all the organisation's accounts are pushed.
             *
             */
            accountIds?: Array<string>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<WebhookFullSecret>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/webhooks',
            headers: {
                Accept: 'application/json',
            },
            body: {
                url: data?.url,
                account_ids: data?.accountIds,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                413: `The request is larger than 100kB.`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a webhook
     * @param id The webhooks's unique identifier
     * @param options Additional operation options
     * @returns Webhook OK
     */
    public getWebhook(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<Webhook>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            headers: {
                Accept: 'application/json',
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update a webhook
     * @param id The webhooks's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns Webhook OK
     */
    public updateWebhook(
        id: string,
        data: {
            url: Url
            /**
             * Determines if events should be sent to the webhook or not. Defaults to `true` for newly created
             * webhooks. When updating a webhook and the value is not explicitly specified the existing value
             * will be used.
             *
             */
            enabled: boolean
            /**
             * The updated webhook will exclusively push events which belong to the given account identifiers.
             *
             * If not set, the previous account identifiers filter remains unchanged.
             *
             */
            accountIds?: Array<string>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<Webhook>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            headers: {
                Accept: 'application/json',
            },
            body: {
                url: data?.url,
                enabled: data?.enabled,
                account_ids: data?.accountIds,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                413: `The request is larger than 100kB.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Delete a webhook
     * @param id The webhooks's unique identifier
     * @param options Additional operation options
     * @returns void
     */
    public deleteWebhook(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<void>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'DELETE',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Rotate a webhook secret
     * The existing secret will be invalidated immediately and subsequent webhook payloads will be
     * accompanied by HMACs using the new secret.
     *
     * @param id The webhooks's unique identifier
     * @param options Additional operation options
     * @returns WebhookFullSecret OK
     */
    public rotateWebhookSecret(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SuccessResponse<WebhookFullSecret>, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/webhooks/{id}/rotate-secret',
            path: {
                id: id,
            },
            headers: {
                Accept: 'application/json',
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
