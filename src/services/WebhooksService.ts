/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWebhookRequest } from '../models/CreateWebhookRequest.js'
import type { UpdateWebhookRequest } from '../models/UpdateWebhookRequest.js'
import type { Webhook } from '../models/Webhook.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class WebhooksService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get existing webhooks
     * @returns Webhook Existing webhooks fetched successfully
     * @throws ApiError
     */
    public getWebhooks(): Promise<Result<Array<Webhook>, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/webhooks',
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create a new webhook
     * @param requestBody
     * @returns Webhook A webhook created successfully
     * @throws ApiError
     */
    public createWebhook(requestBody: CreateWebhookRequest): Promise<Result<Webhook, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get an existing webhook
     * @param id The webhooks's unique identifier
     * @returns Webhook Existing webhook fetched successfully
     * @throws ApiError
     */
    public getWebhookById(id: string): Promise<Result<Webhook, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The webhook does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Update an existing webhook
     * @param id The webhooks's unique identifier
     * @param requestBody
     * @returns Webhook Existing webhook updated successfully
     * @throws ApiError
     */
    public updateWebhook(
        id: string,
        requestBody: UpdateWebhookRequest,
    ): Promise<Result<Webhook, ApiError>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The webhook does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Delete an existing webhook
     * @param id The webhooks's unique identifier
     * @returns any Existing webhook deleted successfully
     * @throws ApiError
     */
    public deleteWebhook(id: string): Promise<Result<any, ApiError>> {
        return __request(this.client, this.config, {
            method: 'DELETE',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The webhook does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Rotate a secret of an existing webhook.
     * The existing secret will be invalidated immediately and subsequent webhook payloads will be
     * accompanied by HMACs using the new secret.
     *
     * @param id The webhooks's unique identifier
     * @returns Webhook The secret was rotated successfully
     * @throws ApiError
     */
    public rotateWebhookSecret(id: string): Promise<Result<Webhook, ApiError>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/webhooks/{id}/rotate-secret',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                404: `The webhook does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
