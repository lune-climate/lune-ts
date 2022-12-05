/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookBase } from './WebhookBase'

export type WebhookFullSecret = WebhookBase & {
    /**
     * The secret key used to generate the webhook payload HMAC.
     */
    secret: string
}
