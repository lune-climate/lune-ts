/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Merchant = {
    /**
     * An ISO 18245 Merchant Category Code (leading zeros need to be preserved) corresponding
     * to the transaction.
     *
     * See https://github.com/greggles/mcc-codes for available codes.
     *
     */
    category_code: string
    /**
     * The name of the merchant.
     */
    name?: string
    /**
     * The three-letter code of the merchant's country.
     */
    country_code: string
}
