/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookRequest } from '../models/WebhookRequest'

import { ClientConfig } from '../core/ClientConfig'
import { request as __request } from '../core/request'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class WebhookRequestService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Webhook request
     * @param requestBody
     * @returns any The events have been successfully handled. Any status code of the `2xx` format has the same behaviour. Any header or body are ignored by Lune.
     * @throws ApiError
     */
    public webhookRequest(requestBody: WebhookRequest): Promise<Result<any, string>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/WebhookRequest',
            body: requestBody,
            mediaType: 'application/json',
        })
    }
}
