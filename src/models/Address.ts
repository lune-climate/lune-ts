/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Detailed information about an address.
 *
 * Even though though `street_line1`, `postcode`, `city` are optional properties, the more details
 * you provide, the more likely we are able to resolve the address to its intended location.
 *
 * Note: only `postcode` is guaranteed to be unique for a country.
 *
 */
export type Address = {
    /**
     * A street and house number (or equivalent).
     */
    streetLine1?: string
    /**
     * An address component more precise than a street and house number.
     */
    streetLine2?: string
    /**
     * The postal code in the format specific to the country it's in
     */
    postcode?: string
    city?: string
    /**
     * A three-letter country code.
     */
    countryCode: string
}
