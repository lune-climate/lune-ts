/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Url } from './Url'

export type Webhook = {
    /**
     * The webhook's unique identifier
     */
    id: string
    url: Url
    /**
     * Determines if events should be sent to the webhook or not.
     */
    enabled: boolean
    /**
     * The secret key used to generate the webhook payload HMAC.
     */
    secret: string
}
