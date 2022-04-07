/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookRequest } from '../models/WebhookRequest.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class WebhookRequestService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Webhook request
     * @param requestBody
     * @returns any The events have been successfully handled. Any status code of the `2xx` format has the same behaviour. Any header or body are ignored by Lune.
     */
    public webhookRequest(requestBody: WebhookRequest): Promise<Result<any, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/WebhookRequest',
            body: requestBody,
            mediaType: 'application/json',
        })
    }
}
