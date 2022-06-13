/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientAccount } from '../models/ClientAccount.js'
import type { CreateClientAccountRequest } from '../models/CreateClientAccountRequest.js'
import type { UpdateAccountRequest } from '../models/UpdateAccountRequest.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class ClientAccountsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Create a client account
     * Create a client account
     *
     * A client account can be of type test or live.
     *
     * @param requestBody
     * @returns ClientAccount The response returns the created client account
     */
    public createClientAccount(
        requestBody: CreateClientAccountRequest,
    ): Promise<Result<ClientAccount, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/accounts/client',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                403: `Forbidden. The API Key is not authorized to perform the operation.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Update a client account.
     * Update a client account and return the updated account.
     *
     * @param id The account id
     * @param requestBody
     * @returns ClientAccount The response returns the updated account
     */
    public updateClientAccount(
        id: string,
        requestBody: UpdateAccountRequest,
    ): Promise<Result<ClientAccount, ApiError>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/accounts/client/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
