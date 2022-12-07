/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Payment } from '../models/Payment.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class PaymentsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get a payment by a temporary id.
     * Get a specific payment by a temporary id.
     *
     * The temporary id will remain valid for 15min from the payment's creation after which the endpoint will return a 404.
     *
     * @param temporaryId The payment's temporary id
     * @param options Additional operation options
     * @returns Payment OK
     */
    public getPaymentByTemporaryId(
        temporaryId: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Payment, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/payments/by-temporary-id/{temporary_id}',
            path: {
                temporary_id: temporaryId,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
