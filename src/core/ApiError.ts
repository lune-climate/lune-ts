import { AxiosError } from 'axios'

import { Errors } from '../models/Errors'
import { ApiRequestOptions } from './ApiRequestOptions'

export class ApiError {
    public readonly description: string
    public readonly statusCode: number | undefined
    public readonly errors: Errors | undefined

    constructor(error: AxiosError, options: ApiRequestOptions) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response) {
            // Provide some defaults just in case response is not in schema
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

            this.statusCode = error.response.status
            this.description = errors[error.response.status]
            this.errors = error.response.data as Errors
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.description =
                'Something went wrong communicating with Lune. Please contact support if this happens again.'
        } else {
            // Something happened in setting up the request that triggered an Error
            this.description = error.message
        }
    }
}
