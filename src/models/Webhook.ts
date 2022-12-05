/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookBase } from './WebhookBase'

export type Webhook = WebhookBase & {
    /**
     * The last 4 characters of the secret key used to generate the webhook payload HMAC.
     */
    secret: string
}
