/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Address = {
    /**
     * A street and house number (or equivalent).
     */
    street_line1: string
    /**
     * An address component more precise than a street and house number.
     */
    street_line2?: string
    /**
     * The postal code in the format specific to the country it's in
     */
    postcode: string
    city: string
    /**
     * A three-letter country code.
     */
    country_code: string
}
