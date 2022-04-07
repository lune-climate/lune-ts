/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Diet } from './Diet'
import type { Distance } from './Distance'
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
    country_code: string
    /**
     * Does the individual use a car?
     */
    car_use: boolean
    /**
     * How is the car powered?
     */
    car_fuel_type?: 'gasoline' | 'electric' | 'hybrid'
    /**
     * Average yearly distance travelled per car
     */
    average_car_distance_travelled?: Distance
    /**
     * Number of short (under 3 hours) flights per year
     */
    short_flights: number
    /**
     * Number of medium (between 3 and 6 hours) flights per year
     */
    medium_flights: number
    /**
     * Number of long (over 6 hours) flights per year
     */
    long_flights: number
    /**
     * Number of days per week commuting by public transport
     */
    days_per_week_using_public_transport: number
    diet: Diet
    /**
     * Food, supermarket, farmers market, fishmongers etc... expenses
     */
    monthly_grocery_expenses: MonetaryAmount
    /**
     * Dining and take out expenses
     */
    monthly_restaurant_expenses: MonetaryAmount
    /**
     * Clothing expenses
     */
    monthly_clothing_expenses: MonetaryAmount
    /**
     * Furniture and appliances expenses
     */
    monthly_furniture_appliances_expenses: MonetaryAmount
    /**
     * Other such as phone, laptops, any other "item" you can think of.
     */
    monthly_other_expenses?: MonetaryAmount
    /**
     * Annual electricity consumption in kWh
     */
    electricity_consumption: number
    /**
     * Is the electricity provided by renewable source(s)?
     */
    green_electricity_used: boolean
    /**
     * Annual natural gas consumption in cubic meters
     */
    gas_consumption: number
}
