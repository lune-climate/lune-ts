import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { ClientConfig } from './core/ClientConfig'

export class LuneClient {
    protected client: AxiosInstance
    protected config: ClientConfig

    constructor(
        apiKey: string,
        baseUrl: string = 'https://api.lune.co',
        apiVersion: string = '1',
        requestInterceptors: ((
            req: AxiosRequestConfig,
        ) => AxiosRequestConfig | Promise<AxiosRequestConfig>)[] = [],
        responseInterceptors: ((
            req: AxiosRequestConfig,
        ) => AxiosRequestConfig | Promise<AxiosRequestConfig>)[] = [],
    ) {
        this.config = {
            BASE_URL: `${baseUrl}/v{api-version}`,
            VERSION: apiVersion,
            BEARER_TOKEN: apiKey,
        }
        this.client = axios.create()
        for (const requestInterceptor of requestInterceptors) {
            this.client.interceptors.request.use(requestInterceptor)
        }
        for (const responseInterceptor of responseInterceptors) {
            this.client.interceptors.response.use(responseInterceptor)
        }
    }
}
