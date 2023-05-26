/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account.js'
import type { AccountPair } from '../models/AccountPair.js'
import type { ClientAccount } from '../models/ClientAccount.js'
import type { CurrencyCode } from '../models/CurrencyCode.js'
import type { PaginatedAccounts } from '../models/PaginatedAccounts.js'
import type { UploadLogoResponse } from '../models/UploadLogoResponse.js'

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
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a client account
     * @param options Additional operation options
     * @returns ClientAccount OK
     */
    public getClientAccount(options?: {
        /**
         * Account Id to be used to perform the API call
         */
        accountId?: string
    }): Promise<Result<ClientAccount, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/accounts/client/me',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
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
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
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
             * The bundle portfolio unique identifier.
             */
            bundlePortfolioId?: string
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
                bundle_portfolio_id: data?.bundlePortfolioId,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                404: `The specified resource was not found`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Partially update an account
     * Partially update an account. Live accounts will replicate a name change to its sibling account. Test accounts name updates are disallowed (name property must match the current account name).
     *
     * @param id The account's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns Account OK
     */
    public partialUpdateAccount(
        id: string,
        data: {
            /**
             * The account name.
             */
            name?: string
            /**
             * The account beneficiary.
             */
            beneficiary?: string | null
            /**
             * The bundle portfolio unique identifier.
             */
            bundlePortfolioId?: string | null
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Account, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PATCH',
            url: '/accounts/{id}',
            path: {
                id: id,
            },
            body: {
                name: data?.name,
                beneficiary: data?.beneficiary,
                bundle_portfolio_id: data?.bundlePortfolioId,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                404: `The specified resource was not found`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Update an account logo
     * @param id The account's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns UploadLogoResponse OK
     */
    public updateAccountLogo(
        id: string,
        data: {
            logo: Blob
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<UploadLogoResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/accounts/{id}/logo',
            path: {
                id: id,
            },
            formData: {
                logo: data?.logo,
            },
            mediaType: 'multipart/form-data',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                404: `The specified resource was not found`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
