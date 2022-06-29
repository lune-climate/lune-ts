/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountType } from '../models/AccountType.js'
import type { ClientAccount } from '../models/ClientAccount.js'
import type { CreateClientAccountRequest } from '../models/CreateClientAccountRequest.js'
import type { PaginatedClientAccounts } from '../models/PaginatedClientAccounts.js'
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
     * Get client accounts
     * Returns paginated client accounts.
     *
     * Query parameters can be used to filter these accounts by name and/or type.
     *
     * @param limit Default is 10.
     * Maximum number of resources to return, between 1 and 100.
     * @param after A cursor for use in pagination.
     *
     * *after* is an object ID that defines your place in the list.
     *
     * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
     *
     * @param type Used to filter the results to only include accounts of a specific type.
     * @param name Used to filter the results to only include accounts which name contains this value (case insensitive).
     * Keep in mind the value itself can appear at the beggining, middle or end on the actual account name.
     * @returns PaginatedClientAccounts The response returns paginated client accounts
     */
    public getClientAccounts(
        limit?: string,
        after?: string,
        type?: AccountType,
        name?: string,
    ): Promise<Result<PaginatedClientAccounts, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/accounts/client',
            query: {
                limit: limit,
                after: after,
                type: type,
                name: name,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
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
