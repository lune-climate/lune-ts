/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions.js'
import type { ClientConfig, Headers } from './ClientConfig.js'
import { AxiosError, AxiosInstance } from 'axios'
import { Err, Ok, Result } from 'ts-results-es'
import { ApiError } from './ApiError.js'

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
        // @ts-ignore
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
        if (options.path?.hasOwnProperty(group)) {
            return encodeURI(String(options.path[group]))
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
                formData.append(key, JSON.stringify(value))
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
    return
}

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>

const getHeaders = (config: ClientConfig, options: ApiRequestOptions): Headers => {
    const bearerToken = config.BEARER_TOKEN
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
        headers['Authorization'] = `Bearer ${bearerToken}`
    }

    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`)
        headers['Authorization'] = `Basic ${credentials}`
    }

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
            return JSON.stringify(options.body)
        } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
            return options.body
        } else {
            return JSON.stringify(options.body)
        }
    }
    return
}

const getResponseHeader = (response: Response, responseHeader?: string): string | undefined => {
    if (responseHeader) {
        const content = response.headers.get(responseHeader)
        if (isString(content)) {
            return content
        }
    }
    return
}

const getResponseBody = async (response: Response): Promise<any> => {
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get('Content-Type')
            if (contentType) {
                const isJSON = contentType.toLowerCase().startsWith('application/json')
                if (isJSON) {
                    return await response.json()
                } else {
                    return await response.text()
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    return
}

const getError = (options: ApiRequestOptions, statusCode: number): string => {
    const errors: Record<number, string> = {
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        ...options.errors,
    }

    return errors[statusCode]
}

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 */
export const request = async <T>(
    client: AxiosInstance,
    config: ClientConfig,
    options: ApiRequestOptions,
): Promise<Result<T, ApiError>> => {
    const url = getUrl(config, options)
    const formData = getFormData(options)
    const body = getRequestBody(options)
    const headers = getHeaders(config, options)

    return client({
        baseURL: url,
        method: options.method,
        headers: headers,
        params: formData,
        data: body,
    })
        .then(function (response) {
            return Ok(response.data as T)
        })
        .catch(function (error: AxiosError) {
            return Err(new ApiError(error, options))
        })
}
