import axios, { AxiosInstance } from 'axios'

import { ClientConfig } from './core/ClientConfig'

export class LuneClient {
    protected client: AxiosInstance
    protected config: ClientConfig

    constructor(
        apiKey: string,
        baseUrl: string = 'https://api.lune.co',
        apiVersion: string = '1',
        account?: string,
    ) {
        this.config = {
            BASE_URL: `${baseUrl}/v{api-version}`,
            VERSION: apiVersion,
            BEARER_TOKEN: apiKey,
            ACCOUNT: account,
        }
        this.client = axios.create()
    }

    public setAccount(accountId: string) {
        this.config.ACCOUNT = accountId
    }
}
