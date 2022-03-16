/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Area } from './Area'
import type { CompanyCloudUse } from './CompanyCloudUse'
import type { CompanyOnPremiseUse } from './CompanyOnPremiseUse'
import type { Distance } from './Distance'
import type { IntegerPercentage } from './IntegerPercentage'
import type { MonetaryAmount } from './MonetaryAmount'

/**
 * Parameters for estimating emissions associated with operating a company.
 *
 * All relevant values are yearly values.
 *
 */
export type CompanyEstimateRequest = {
    /**
     * Number of employees
     */
    employees: number
    /**
     * Share of employees working remotely (in percent)
     */
    remote_employees_percentage: IntegerPercentage
    /**
     * Office area in square meters
     */
    office_area: Area
    /**
     * The three-letter country code of the country where the company is located.
     */
    country_code: string
    /**
     * The company's postal code
     */
    postcode?: string
    city?: string
    /**
     * Electricity consumption in kWh
     */
    electricity_consumption: number
    /**
     * Is the electricity provided by renewable source(s)?
     */
    green_electricity_used: boolean
    /**
     * Yearly natural gas consumption in cubic meters
     */
    gas_consumption: number
    /**
     * Company cars
     */
    company_cars: number
    /**
     * Average yearly distance travelled per car
     */
    average_car_distance_travelled: Distance
    /**
     * Number of employees commuting by public transport
     */
    employees_using_public_transport: number
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
     * Share of business or first class flights, in percent
     */
    first_or_business_class_percentage: IntegerPercentage
    /**
     * Amount spend on food and drinks
     */
    food_and_drinks_expenses: MonetaryAmount
    /**
     * Share of vegetarians or vegans in the company, in percent
     */
    vegetarian_and_vegan_percentage: IntegerPercentage
    /**
     * New electronic devices (laptops, monitors, etc.) expenses
     */
    electronic_device_expenses: MonetaryAmount
    /**
     * The amount of garbage produced, in kilograms
     */
    garbage: number
    /**
     * Share of recycled garbage, in percent
     */
    recycled_garbage_percentage: IntegerPercentage
    tech?: {
        on_premise?: CompanyOnPremiseUse
        cloud?: CompanyCloudUse
    }
}
