/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { Diet } from './Diet'
import type { Distance } from './Distance'
import type { MassUnit } from './MassUnit'
import type { MonetaryAmount } from './MonetaryAmount'

/**
 * Parameters for estimating an individual's emissions
 *
 * All relevant values are yearly values.
 *
 */
export type IndividualEstimateRequest = {
    /**
     * The three-letter country code of the country where the company is located.
     */
    countryCode: string
    /**
     * Does the individual use a car?
     */
    carUse: boolean
    /**
     * How is the car powered?
     */
    carFuelType?: IndividualEstimateRequest.car_fuel_type
    /**
     * Average yearly distance travelled per car
     */
    averageCarDistanceTravelled?: Distance
    /**
     * Number of short (under 3 hours) flights per year
     */
    shortFlights: number
    /**
     * Number of medium (between 3 and 6 hours) flights per year
     */
    mediumFlights: number
    /**
     * Number of long (over 6 hours) flights per year
     */
    longFlights: number
    /**
     * Number of days per week commuting by public transport
     */
    daysPerWeekUsingPublicTransport: number
    diet: Diet
    /**
     * Food, supermarket, farmers market, fishmongers etc... expenses
     */
    monthlyGroceryExpenses: MonetaryAmount
    /**
     * Dining and take out expenses
     */
    monthlyRestaurantExpenses: MonetaryAmount
    /**
     * Clothing expenses
     */
    monthlyClothingExpenses: MonetaryAmount
    /**
     * Furniture and appliances expenses
     */
    monthlyFurnitureAppliancesExpenses: MonetaryAmount
    /**
     * Other such as phone, laptops, any other "item" you can think of.
     */
    monthlyOtherExpenses?: MonetaryAmount
    /**
     * Annual electricity consumption in kWh
     */
    electricityConsumption: number
    /**
     * Is the electricity provided by renewable source(s)?
     */
    greenElectricityUsed: boolean
    /**
     * Annual natural gas consumption in cubic meters
     */
    gasConsumption: number
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}

export namespace IndividualEstimateRequest {
    /**
     * How is the car powered?
     */
    export enum car_fuel_type {
        GASOLINE = 'gasoline',
        ELECTRIC = 'electric',
        HYBRID = 'hybrid',
    }
}
