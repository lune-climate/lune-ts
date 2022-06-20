/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account.js'
import type { AccountType } from '../models/AccountType.js'
import type { CreateAccountRequest } from '../models/CreateAccountRequest.js'
import type { PaginatedAccounts } from '../models/PaginatedAccounts.js'
import type { PaginatedClientAccounts } from '../models/PaginatedClientAccounts.js'
import type { StandardAccount } from '../models/StandardAccount.js'
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
     * Create accounts
     * Create a pair of standard accounts.
     *
     * A test and live account are returned
     *
     * @param requestBody
     * @returns StandardAccountPair The response returns the pair of accounts
     */
    public createAccounts(
        requestBody: CreateAccountRequest,
    ): Promise<Result<StandardAccountPair, ApiError>> {
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
     * Get accounts
     * Returns paginated accounts.
     *
     * Query parameters can be used to filter these accounts by name and/or scope.
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
     * @returns PaginatedAccounts The response returns paginated accounts
     */
    public getAccounts(
        limit?: string,
        after?: string,
        type?: AccountType,
        name?: string,
    ): Promise<Result<PaginatedAccounts, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/accounts',
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
     * Update an account.
     * Update a standard account. If targeting a test account, the name field needs to match the current
     * account name. If targeting a live account, the name field change will be replicated to its
     * sibling account.
     *
     * @param id The account id
     * @param requestBody
     * @returns StandardAccount The response returns the updated account
     */
    public updateAccount(
        id: string,
        requestBody: UpdateAccountRequest,
    ): Promise<Result<StandardAccount, ApiError>> {
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
