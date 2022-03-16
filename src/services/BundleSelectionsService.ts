/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundleSelection } from '../models/BundleSelection'
import type { BundleSelectionRequest } from '../models/BundleSelectionRequest'

import { ClientConfig } from '../core/ClientConfig'
import { request as __request } from '../core/request'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class BundleSelectionsService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Get account bundle selection
     * Returns the account's bundle selection.
     *
     * When orders are placed without explicity setting bundle selections, the account's bundle selection is used.
     *
     * Account bundle selections can be set via the API or Dashboard.
     *
     * Every account is created with default bundle selections.
     *
     * @returns BundleSelection The response returns the account's bundle selections
     * @throws ApiError
     */
    public getBundleSelection(): Promise<Result<BundleSelection, string>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/bundle-selections',
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Set account bundle selection
     * Set the account's bundle selection.
     *
     * Every account is created with default bundle selections. This will override default bundle selections.
     *
     * @param requestBody
     * @returns BundleSelection The response returns the new account's bundle selections
     * @throws ApiError
     */
    public updateBundleSelection(
        requestBody: BundleSelectionRequest,
    ): Promise<Result<BundleSelection, string>> {
        return __request(this.client, this.config, {
            method: 'PUT',
            url: '/bundle-selections',
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
