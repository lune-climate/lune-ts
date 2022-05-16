/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account.js'
import type { ClientAccount } from '../models/ClientAccount.js'
import type { CreateAccountRequest } from '../models/CreateAccountRequest.js'
import type { StandardAccountPair } from '../models/StandardAccountPair.js'
import type { UpdateAccountRequest } from '../models/UpdateAccountRequest.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class AccountsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get account
     * Returns the active account. This is the account linked to the API key by default but is affected
     * by the `Lune-Account` header.
     *
     * One account object is returned.
     *
     * @returns Account The response returns an account
     */
    public getAccount(): Promise<Result<Account, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/accounts/me',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create accounts
     * Create a pair of standard accounts or a client account.
     *
     * If a pair of accounts is requested the test and live accounts are returned, otherwise the client account is returned.
     *
     * @param requestBody
     * @returns any The response returns the pair of accounts
     */
    public createAccounts(
        requestBody: CreateAccountRequest,
    ): Promise<Result<ClientAccount | StandardAccountPair, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/accounts',
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
     * Update an account.
     * If the account being updated has standard scope its sibling account will also be updated
     * the same way but only one account (tha one being requested to be updated) will be returned.
     *
     * @param id The account id
     * @param requestBody
     * @returns Account The response returns the updated account
     */
    public updateAccount(
        id: string,
        requestBody: UpdateAccountRequest,
    ): Promise<Result<Account, ApiError>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/accounts/{id}',
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
