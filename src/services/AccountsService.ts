/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account'

import { ClientConfig } from '../core/ClientConfig'
import { request as __request } from '../core/request'
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
     * @throws ApiError
     */
    public getAccount(): Promise<Result<Account, string>> {
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
}
