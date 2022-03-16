import axios, { AxiosInstance } from 'axios'

import { ClientConfig } from './core/ClientConfig'

export class LuneClient {
    protected client: AxiosInstance
    protected config: ClientConfig

    constructor(apiKey: string) {
        this.config = {
            BASE_URL: 'http://localhost:3000/v{api-version}',
            VERSION: '1',
            BEARER_TOKEN: apiKey,
        }
        this.client = axios.create()
    }
}
