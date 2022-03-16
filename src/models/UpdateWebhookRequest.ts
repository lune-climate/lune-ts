/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Url } from './Url'

export type UpdateWebhookRequest = {
    url?: Url
    /**
     * Determines if events should be sent to the webhook or not. Defaults to `true` for newly created
     * webhooks. When updating a webhook and the value is not explicitly specified the existing value
     * will be used.
     *
     */
    enabled?: boolean
}
