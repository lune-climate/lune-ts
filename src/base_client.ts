import axios, { AxiosInstance } from 'axios'

import { ClientConfig } from './core/ClientConfig'

export class LuneClient {
    protected client: AxiosInstance
    protected config: ClientConfig

    constructor(
        apiKey: string,
        baseUrl: string = 'https://api.lune.co',
        apiVersion: string = '1',
        targetAccount?: string,
    ) {
        this.config = {
            BASE_URL: `${baseUrl}/v{api-version}`,
            VERSION: apiVersion,
            BEARER_TOKEN: apiKey,
            TARGET_ACCOUNT: targetAccount,
        }
        this.client = axios.create()
    }

    public setTargetAccount(accountId: string) {
        this.config.TARGET_ACCOUNT = accountId
    }
}
