/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookBase } from './WebhookBase'

/**
 * You can configure webhook endpoints via the API to be notified about events that occur in your accounts or client accounts.
 *
 */
export type Webhook = WebhookBase & {
    /**
     * The last 4 characters of the secret key used to generate the webhook payload HMAC.
     */
    secret: string
}
