/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account.js'
import type { AccountPair } from '../models/AccountPair.js'
import type { AccountType } from '../models/AccountType.js'
import type { CurrencyCode } from '../models/CurrencyCode.js'
import type { PaginatedAccounts } from '../models/PaginatedAccounts.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class AccountsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get an account
     * @param options Additional operation options
     * @returns Account OK
     */
    public getAccount(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<Account, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/accounts/me',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }

    /**
     * Create an account pair
     * Create a pair of live and test accounts. The accounts are linked via the `sibling_id` property.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns AccountPair OK
     */
    public createAccountPair(
        data: {
            /**
             * The account name.
             */
            name: string
            /**
             * The account currency.
             */
            currency: CurrencyCode
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
    ): Promise<Result<AccountPair, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/accounts',
            body: {
                name: data?.name,
                currency: data?.currency,
                beneficiary: data?.beneficiary,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                429: `Too Many Requests`,
            },
        })
    }

    /**
     * List accounts
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedAccounts OK
     */
    public listAccounts(
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
             * Filter accounts based on type.
             */
            type?: AccountType
            /**
             * Filter accounts based on name (case insensitive).
             * The value can appear at the beggining, middle or end on the actual account name.
             */
            name?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedAccounts, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/accounts',
            query: {
                limit: data?.limit,
                after: data?.after,
                type: data?.type,
                name: data?.name,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }

    /**
     * Update an account
     * Update an account. Live accounts will replicate a name change to its sibling account. Test accounts name updates are disallowed (name property must match the current account name).
     *
     * @param id The account's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns Account OK
     */
    public updateAccount(
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
    ): Promise<Result<Account, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/accounts/{id}',
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
                400: `Bad Request`,
                401: `Unauthorized`,
                429: `Too Many Requests`,
            },
        })
    }
}
