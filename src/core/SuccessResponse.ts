import { AxiosResponse } from 'axios'

export const Methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch']
export type Method = (typeof Methods)[number]

export type Meta<T> = {
    method: Method
    url: string
    request: null | unknown
    response: AxiosResponse<T, unknown>
    requestHeaders: { contentType: string | null }
}

export type SuccessResponse<T> = T & { _meta: Meta<T> }
