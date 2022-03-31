/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bundle } from './Bundle'
import type { CurrencyCode } from './CurrencyCode'
import type { Money } from './Money'
import type { OffsetLinkStatus } from './OffsetLinkStatus'
import type { Timestamp } from './Timestamp'

export type OffsetLink = {
    /**
     * The offset link identifier
     */
    id: string
    /**
     * Offset link name.
     *
     * This is a human readable name to recognise and distingish different offset links.
     *
     */
    name: string
    /**
     * Offset link title
     *
     * This is the title that appears on the first screen of the offset links flow.
     *
     */
    title?: string
    /**
     * Offset link description
     *
     * This is the description that appears on the first screen of the offset links flow.
     *
     */
    description?: string
    /**
     * Offset link logo URL
     *
     * This is the logo URL that appears on the first screen of the offset links flow.
     *
     */
    logo?: string
    /**
     * Whether to include the Offset link logo (defined in Account settings) in the footer.
     *
     */
    useLogo: boolean
    /**
     * The actual offset link URL that can be used to place orders
     */
    url: string
    value?: Money
    currency?: CurrencyCode
    /**
     * The email addresses of users that are allowed to use the offset link.
     */
    emails?: Array<string>
    /**
     * Bundle objects
     */
    bundles?: Array<Bundle>
    createdAt: Timestamp
    status: OffsetLinkStatus
    expiresAt: Timestamp
    /**
     * If true, the user of the Offset Link is required to pay by credit/debit card.
     *
     */
    requirePayment: boolean
}
