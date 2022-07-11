/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Area } from './Area'
import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { CompanyCloudUse } from './CompanyCloudUse'
import type { CompanyOnPremiseUse } from './CompanyOnPremiseUse'
import type { Distance } from './Distance'
import type { IntegerPercentage } from './IntegerPercentage'
import type { MassUnit } from './MassUnit'
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
    remoteEmployeesPercentage: IntegerPercentage
    /**
     * Office area in square meters
     */
    officeArea: Area
    /**
     * The three-letter country code of the country where the company is located.
     */
    countryCode: string
    /**
     * The company's postal code
     */
    postcode?: string
    city?: string
    /**
     * Electricity consumption in kWh
     */
    electricityConsumption: number
    /**
     * Is the electricity provided by renewable source(s)?
     */
    greenElectricityUsed: boolean
    /**
     * Yearly natural gas consumption in cubic meters
     */
    gasConsumption: number
    /**
     * Company cars
     */
    companyCars: number
    /**
     * Average yearly distance travelled per car
     */
    averageCarDistanceTravelled: Distance
    /**
     * Number of employees commuting by public transport
     */
    employeesUsingPublicTransport: number
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
     * Share of business or first class flights, in percent
     */
    firstOrBusinessClassPercentage: IntegerPercentage
    /**
     * Amount spend on food and drinks
     */
    foodAndDrinksExpenses: MonetaryAmount
    /**
     * Share of vegetarians or vegans in the company, in percent
     */
    vegetarianAndVeganPercentage: IntegerPercentage
    /**
     * New electronic devices (laptops, monitors, etc.) expenses
     */
    electronicDeviceExpenses: MonetaryAmount
    /**
     * The amount of garbage produced, in kilograms
     */
    garbage: number
    /**
     * Share of recycled garbage, in percent
     */
    recycledGarbagePercentage: IntegerPercentage
    tech?: {
        onPremise?: CompanyOnPremiseUse
        cloud?: CompanyCloudUse
    }
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
