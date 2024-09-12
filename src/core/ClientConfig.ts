export type Headers = Record<string, string>

export type ClientConfig = {
    BASE_URL: string
    VERSION: string
    CALENDAR_VERSION: string
    BEARER_TOKEN?: string
    USERNAME?: string
    PASSWORD?: string
    ACCOUNT?: string
    HEADERS?: Headers
}
