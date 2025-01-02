import { AxiosInstance, AxiosResponse, isAxiosError } from 'axios'
import snakeCaseKeys from 'snakecase-keys'
import { Err, Ok, Result } from 'ts-results-es'

import { ApiError, constructApiError } from './ApiError.js'
import type { ApiRequestOptions } from './ApiRequestOptions.js'
import type { ClientConfig, Headers } from './ClientConfig.js'
import { asSuccessResponse, SuccessResponse } from './SuccessResponse.js'

const isDefined = <T>(value: T | null | undefined): value is Exclude<T, null | undefined> => {
    return value !== undefined && value !== null
}

const isString = (value: any): value is string => {
    return typeof value === 'string'
}

const isStringWithValue = (value: any): value is string => {
    return isString(value) && value !== ''
}

const isBlob = (value: any): value is Blob => {
    return (
        typeof value === 'object' &&
        typeof value.type === 'string' &&
        typeof value.stream === 'function' &&
        typeof value.arrayBuffer === 'function' &&
        typeof value.constructor === 'function' &&
        typeof value.constructor.name === 'string' &&
        /^(Blob|File)$/.test(value.constructor.name) &&
        /^(Blob|File)$/.test(value[Symbol.toStringTag])
    )
}

const isFormData = (value: any): value is FormData => {
    return value instanceof FormData
}

const base64 = (str: string): string => {
    try {
        return btoa(str)
    } catch (err) {
        return Buffer.from(str).toString('base64')
    }
}

const getQueryString = (params: Record<string, any>): string => {
    const qs: string[] = []

    const append = (key: string, value: any) => {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    }

    const process = (key: string, value: any) => {
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach((v) => {
                    process(key, v)
                })
            } else if (typeof value === 'object') {
                Object.entries(value).forEach(([k, v]) => {
                    process(`${key}[${k}]`, v)
                })
            } else {
                append(key, value)
            }
        }
    }

    Object.entries(params).forEach(([key, value]) => {
        process(key, value)
    })

    if (qs.length > 0) {
        return `?${qs.join('&')}`
    }

    return ''
}

const getUrl = (config: ClientConfig, options: ApiRequestOptions): string => {
    const path = options.url.replace(/{(.*?)}/g, (substring: string, group: string) => {
        if (Object.prototype.hasOwnProperty.call(options.path, group)) {
            return encodeURI(String(options.path![group]))
        }
        return substring
    })

    const baseUrlWithVersion = config.BASE_URL.replace('{api-version}', config.VERSION)
    const url = `${baseUrlWithVersion}${path}`
    if (options.query) {
        return `${url}${getQueryString(options.query)}`
    }
    return url
}

const getFormData = (options: ApiRequestOptions): FormData | undefined => {
    if (options.formData) {
        const formData = new FormData()

        const process = (key: string, value: any) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value)
            } else {
                formData.append(key, JSON.stringify(snakeCaseKeys(value, { deep: true })))
            }
        }

        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((v) => process(key, v))
                } else {
                    process(key, value)
                }
            })

        return formData
    }
    return undefined
}

const getHeaders = (config: ClientConfig, options: ApiRequestOptions): Headers => {
    const bearerToken = config.BEARER_TOKEN
    const luneAccount = config.ACCOUNT
    const calendarVersion = config.CALENDAR_VERSION
    const username = config.USERNAME
    const password = config.PASSWORD
    const additionalHeaders = config.HEADERS

    const headers = Object.entries({
        Accept: 'application/json',
        ...additionalHeaders,
        ...options.headers,
    })
        .filter(([_, value]) => isDefined(value))
        .reduce(
            (headers, [key, value]) => ({
                ...headers,
                [key]: String(value),
            }),
            {} as Record<string, string>,
        )

    if (isStringWithValue(bearerToken)) {
        headers.Authorization = `Bearer ${bearerToken}`
    }

    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`)
        headers.Authorization = `Basic ${credentials}`
    }

    if (isStringWithValue(luneAccount)) {
        headers['Lune-Account'] = luneAccount
    }

    headers['Lune-Version'] = calendarVersion

    if (options.body) {
        if (options.mediaType) {
            headers['Content-Type'] = options.mediaType
        } else if (isBlob(options.body)) {
            headers['Content-Type'] = options.body.type || 'application/octet-stream'
        } else if (isString(options.body)) {
            headers['Content-Type'] = 'text/plain'
        } else if (!isFormData(options.body)) {
            headers['Content-Type'] = 'application/json'
        }
    }

    return headers as Headers
}

const getRequestBody = (options: ApiRequestOptions): any => {
    if (options.body) {
        if (options.mediaType?.includes('/json')) {
            return JSON.stringify(snakeCaseKeys(options.body, { deep: true }))
        } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
            return options.body
        } else {
            return JSON.stringify(snakeCaseKeys(options.body, { deep: true }))
        }
    }
}

export const request = async <T>(
    client: AxiosInstance,
    config: ClientConfig,
    luneOptions: {
        accountId?: string
    },
    options: ApiRequestOptions,
): Promise<Result<SuccessResponse<T>, ApiError>> => {
    const url = getUrl(config, options)
    const formData = getFormData(options)
    const body = getRequestBody(options)
    const headers = getHeaders(config, options)

    if (luneOptions.accountId) {
        headers['Lune-Account'] = luneOptions.accountId
    }

    return client({
        baseURL: url,
        method: options.method,
        headers,
        params: formData,
        data: body,
        ...(options.responseType ? { responseType: options.responseType } : {}),
    })
        .then((response: AxiosResponse<T>) => {
            return Ok(asSuccessResponse(response))
        })
        .catch((error: unknown) => {
            if (!isAxiosError(error)) {
                throw error
            }
            return Err(constructApiError(error, options))
        })
}
