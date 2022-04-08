/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Money } from './Money'
import type { Timestamp } from './Timestamp'

export type OffsetLinkUpdateRequest = {
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
     * The bundle ids selected for use through the particular offset link.
     */
    bundles?: Array<string>
    value?: Money
    /**
     * The email addresses of users that are allowed to use the offset link.
     */
    emails?: Array<string>
    expiresAt?: Timestamp
    /**
     * Whether to include the Offset link logo (defined in Account settings) in the footer.
     *
     */
    useLogo: boolean
}
