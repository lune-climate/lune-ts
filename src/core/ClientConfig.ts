/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions'

export type Headers = Record<string, string>

export type ClientConfig = {
    BASE_URL: string
    VERSION: string
    BEARER_TOKEN?: string
    USERNAME?: string
    PASSWORD?: string
    HEADERS?: Headers
}
