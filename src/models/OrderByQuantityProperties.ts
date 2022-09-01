/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderByQuantityProperties = {
    /**
     * Requested quantity of CO2 offsets to purchase in tonnes.
     */
    requestedQuantity: string
    /**
     * Requested value of CO2 offsets to purchase in the account's currency.
     */
    requestedValue: string | null
    /**
     * The emission calculation unique identifier
     */
    estimateId: string | null
}
