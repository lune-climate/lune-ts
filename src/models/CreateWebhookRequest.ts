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

import type { Url } from './Url.js'

export type CreateWebhookRequest = {
    url: Url
    /**
     * The created webhook will exclusively push events which belong to the given account identifiers.
     *
     * Act as a filter: if not set, events belonging to all the organisation's accounts are pushed.
     *
     */
    accountIds?: Array<string>
}
