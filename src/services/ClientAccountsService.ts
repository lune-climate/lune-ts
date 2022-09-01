/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountType } from '../models/AccountType.js'
import type { ClientAccount } from '../models/ClientAccount.js'
import type { CurrencyCode } from '../models/CurrencyCode.js'
import type { PaginatedClientAccounts } from '../models/PaginatedClientAccounts.js'

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
     * @param data Request data
     * @param options Additional operation options
     * @returns ClientAccount OK
     */
    public createClientAccount(
        data: {
            /**
             * The account name.
             */
            name: string
            /**
             * The account currency.
             */
            currency: CurrencyCode
            type: AccountType
            /**
             * The account beneficiary.
             */
            beneficiary?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<ClientAccount, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/accounts/client',
            body: {
                name: data?.name,
                currency: data?.currency,
                type: data?.type,
                beneficiary: data?.beneficiary,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * List client accounts
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedClientAccounts OK
     */
    public listClientAccounts(
        data?: {
            /**
             * Maximum number of resources to return, between 1 and 100.
             *
             */
            limit?: string
            /**
             * A cursor for use in pagination.
             *
             * *after* is an object ID that defines your place in the list.
             *
             * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
             *
             */
            after?: string
            /**
             * Filter accounts based on name (case insensitive).
             *
             * The value can appear at the beggining, middle or end on the actual account name.
             *
             */
            name?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedClientAccounts, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/accounts/client',
            query: {
                limit: data?.limit,
                after: data?.after,
                name: data?.name,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update a client account
     * @param id The account's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns ClientAccount OK
     */
    public updateClientAccount(
        id: string,
        data: {
            /**
             * The account name.
             */
            name: string
            /**
             * The account beneficiary.
             */
            beneficiary?: string
            /**
             * The bundle mix unique identifier.
             */
            bundleMixId?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<ClientAccount, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/accounts/client/{id}',
            path: {
                id: id,
            },
            body: {
                name: data?.name,
                beneficiary: data?.beneficiary,
                bundle_mix_id: data?.bundleMixId,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
