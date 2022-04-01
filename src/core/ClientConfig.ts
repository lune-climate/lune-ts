export type Headers = Record<string, string>

export type ClientConfig = {
    BASE_URL: string
    VERSION: string
    BEARER_TOKEN?: string
    USERNAME?: string
    PASSWORD?: string
    TARGET_ACCOUNT?: string
    HEADERS?: Headers
}
