/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookEvent } from '../models/WebhookEvent.js'

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
     * The endpoint describes the request that you will receive in your webhook receiver and the responses the Lune webhook infrastructure expects.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns any The events have been successfully handled. Any status code of the `2xx` format has the same behaviour. Any header or body are ignored by Lune.
     */
    public webhookRequest(
        data: {
            events: Array<WebhookEvent>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<any, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/WebhookRequest',
            body: {
                events: data?.events,
            },
            mediaType: 'application/json',
        })
    }
}
