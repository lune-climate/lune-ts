/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookEvent } from './WebhookEvent'

/**
 * WebhookRequest represents the request that your webhook receiver receives.
 *
 */
export type WebhookRequest = {
    events: Array<WebhookEvent>
}
