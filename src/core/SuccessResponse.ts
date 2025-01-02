import { AxiosError, AxiosResponse } from 'axios'

import type { Headers } from './ClientConfig.js'

export const Methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch']
export type Method = (typeof Methods)[number]

export type Meta<T> = {
    method: Method
    url: string
    request: unknown
    response: AxiosResponse<T, unknown>
    requestHeaders: { contentType: string | null }
}

type AsObject<T> = T extends object
    ? T extends any[]
        ? { notAnObject: T }
        : T
    : { notAnObject: T }
export type SuccessResponse<T> = (AsObject<T> & { _meta: Meta<T> }) | T

function isNotPureObject(value: unknown): boolean {
    return (
        value === null ||
        (typeof value !== 'object' && typeof value !== 'function') ||
        Array.isArray(value)
    )
}

export function asSuccessResponse<T>(headers: Headers, response: AxiosResponse<T>): SuccessResponse<T> {
    const value: T = response.data
    const contentType = headers['content-type']
    if (contentType && contentType.includes('application/json')) {
        if (!('_meta' in response)) {
            throw new Error('_meta is expected')
        }
        const resp = response as ExtendedAxiosResponse<T>
        const v = (isNotPureObject(value) ? { notAnObject: value } : value) as AsObject<T>
        return {
            ...v,
            _meta: resp._meta,
        }
    }
    return value
}

export interface ExtendedAxiosResponse<T = any> extends AxiosResponse<T> {
    _meta: Meta<T>
}

export interface ExtendedAxiosError<T = any> extends AxiosError<T> {
    response?: ExtendedAxiosResponse<T>
}

export function extractRequestFromResponseInterceptor(response: AxiosResponse): {
    request: object | null
    method: Method
    url: string
    requestHeaders: { contentType: string | null }
} {
    const req = response.config
    const data = req.data

    if (!Methods.includes((req.method ?? '').toLowerCase())) {
        throw new Error(`Unexpected method: ${req.method}`)
    }

    return {
        method: req.method!,
        url: req.baseURL!,
        request: !data ? null : typeof data === 'string' ? JSON.parse(data) : data,
        requestHeaders: {
            contentType: req.headers['Content-Type']
                ? (req.headers['Content-Type'] as string)
                : null,
        },
    }
}
