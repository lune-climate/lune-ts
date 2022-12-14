/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Url } from './Url'

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
