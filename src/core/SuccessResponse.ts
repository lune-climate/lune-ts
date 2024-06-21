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

type AsObject<T> = T extends object ? (T extends any[] ? { asObject: T } : T) : { asObject: T }
export type SuccessResponse<T> = AsObject<T> & { _meta: Meta<T> }

function isNotPureObject(value: any): boolean {
    return (
        value === null ||
        (typeof value !== 'object' && typeof value !== 'function') ||
        Array.isArray(value)
    )
}

export function asSuccessResponse<T>(value: T, meta: Meta<T>): SuccessResponse<T> {
    const v = (isNotPureObject(value) ? { asObject: value } : value) as AsObject<T>
    return {
        ...v,
        _meta: meta,
    }
}
