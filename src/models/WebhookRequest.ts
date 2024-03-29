// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebhookEvent } from './WebhookEvent.js'

/**
 * WebhookRequest represents the request that your webhook receiver receives.
 *
 */
export type WebhookRequest = {
    /**
     * An array of WebhookEvent objects.
     */
    events: Array<WebhookEvent>
}
