export type SuccessResponse<T> = T & { _meta: { request: any; response: any } }
