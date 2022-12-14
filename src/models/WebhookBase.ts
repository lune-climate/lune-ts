/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountType } from './AccountType'
import type { Timestamp } from './Timestamp'
import type { Url } from './Url'

export type WebhookBase = {
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
     * For events related to an account, this property refers to the accounts' type.
     *
     * A webhook does not mix live and test events.
     *
     */
    accountType: AccountType
    /**
     * The webhook will exclusively push events which belong to account identifiers.
     *
     * Acts as a filter: if not set, events belonging to all the organisation's accounts are pushed.
     *
     */
    accountIds?: Array<string>
    /**
     * The webhook's creation timestamp.
     */
    createdAt: Timestamp
}
