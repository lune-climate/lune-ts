/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirportSourceDestination } from '../models/AirportSourceDestination.js'
import type { Area } from '../models/Area.js'
import type { BundleSelectionRequest } from '../models/BundleSelectionRequest.js'
import type { CabinClass } from '../models/CabinClass.js'
import type { CompanyCloudUse } from '../models/CompanyCloudUse.js'
import type { CompanyEmissionEstimate } from '../models/CompanyEmissionEstimate.js'
import type { CompanyOnPremiseUse } from '../models/CompanyOnPremiseUse.js'
import type { Diet } from '../models/Diet.js'
import type { Distance } from '../models/Distance.js'
import type { ElectricityConsumption } from '../models/ElectricityConsumption.js'
import type { EmissionEstimateResponse } from '../models/EmissionEstimateResponse.js'
import type { IntegerPercentage } from '../models/IntegerPercentage.js'
import type { MassUnit } from '../models/MassUnit.js'
import type { Merchant } from '../models/Merchant.js'
import type { MonetaryAmount } from '../models/MonetaryAmount.js'
import type { MultiLegShippingEmissionEstimate } from '../models/MultiLegShippingEmissionEstimate.js'
import type { Shipment } from '../models/Shipment.js'
import type { ShippingCountryCode } from '../models/ShippingCountryCode.js'
import type { ShippingMethod } from '../models/ShippingMethod.js'
import type { ShippingRoute } from '../models/ShippingRoute.js'
import type { SingleShippingEmissionEstimate } from '../models/SingleShippingEmissionEstimate.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class EmissionEstimatesService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Create an electricity emission estimate
     * Estimate emissions produced by electricity consumption.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionEstimateResponse OK
     */
    public createElectricityEstimate(
        data: {
            consumption: ElectricityConsumption
            /**
             * The three-letter code of the country where the consumption takes place, if applicable.
             *
             * Providing this value will improve the estimation process. If the value is not provided
             * the global average will be used.
             *
             */
            countryCode?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/electricity',
            body: {
                consumption: data?.consumption,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Get an electricity emission estimate
     * @param id The estimate unique identifier
     * @param options Additional operation options
     * @returns EmissionEstimateResponse OK
     */
    public getElectricityEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/electricity/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Update an electricity emission estimate
     * Update emission estimate produced by electricity consumption.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param id The estimate unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionEstimateResponse Estimation updated successfully.
     *
     */
    public updateElectricityEstimate(
        id: string,
        data: {
            consumption: ElectricityConsumption
            /**
             * The three-letter code of the country where the consumption takes place, if applicable.
             *
             * Providing this value will improve the estimation process. If the value is not provided
             * the global average will be used.
             *
             */
            countryCode?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/electricity/{id}',
            path: {
                id: id,
            },
            body: {
                consumption: data?.consumption,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `The estimate does not exist`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create a flight emission estimate
     * Estimate emissions produced by passengers in a commercial airflight.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionEstimateResponse OK
     */
    public createFlightEstimate(
        data: {
            /**
             * Either the flying distance or the start/destination airport code (ICAO or IATA).
             */
            route: Distance | AirportSourceDestination
            cabinClass?: CabinClass
            /**
             * Number of passengers the calculation should be applied to.
             * This parameter defaults to 1.
             */
            passengers?: number
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/flight',
            body: {
                route: data?.route,
                cabin_class: data?.cabinClass,
                passengers: data?.passengers,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create a shipping emission estimate
     * Estimate emissions produced by shipping something from point A to point B.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * Some examples of the input payload:
     *
     * * Source/destination addresses, 10 tonnes transported by a diesel truck:
     *
     * ```json
     * {
     * "shipment": { "mass": { "amount": "10.0", "unit": "t" } },
     * "route": {
     * "source": {
     * "street_line1": "Karl-Liebknecht-Str. 13",
     * "country_code": "DEU",
     * "city": "Berlin",
     * "postcode": "10178"
     * },
     * "destination": {
     * "street_line1": "62 Great Russell St",
     * "country_code": "GBR",
     * "city": "London",
     * "postcode": "WC1B 3BG"
     * }
     * },
     * "method": "diesel_truck"
     * }
     * ```
     * * 1 tonne transported 2000 km by a small general cargo ship with Marine Gasoil (MGO) fuel used:
     *
     * ```json
     * {
     * "shipment": { "mass": { "amount": "1.0", "unit": "t" } },
     * "route": { "amount": "2000.0", "unit": "km" },
     * "method": { "vessel_type": "sea_general_cargo_small", "fuel": "MGO" }
     * }
     * ```
     *
     * * 3 containers (TEUs) transported 5000 km by a refrigerated container ship over an
     * Europe/South America trade lane:
     *
     * ```json
     * {
     * "shipment": { "containers": "3.0" },
     * "route": { "amount": "5000.0", "unit": "km" },
     * "method": {
     * "vessel_type": "container_ship",
     * "refrigerated": true,
     * "trade_lane": "disaggregated_europe_to_south_america"
     * }
     * }
     * ```
     *
     * * 10 tonnes transported 4000 km by a vessel with IMO number 9745225:
     *
     * ```json
     * {
     * "shipment": { "mass": { "amount": "10.0", "unit": "t" } },
     * "route": { "amount": "4000.0", "unit": "km" },
     * "method": { "vessel_imo_number": "9745225" }
     * }
     * ```
     *
     *
     *
     * You can plug those payloads in the following command:
     *
     * ```
     * curl https://api.lune.co/v1/estimates/shipping \
     * -H 'Authorization: Bearer <API_KEY>' \
     * -H 'Content-Type: application/json' \
     * -X POST \
     * -d <PAYLOAD>
     * ```
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns SingleShippingEmissionEstimate OK
     */
    public createShippingEstimate(
        data: {
            shipment: Shipment
            route: ShippingRoute
            method: ShippingMethod
            countryCode?: ShippingCountryCode
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SingleShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/shipping',
            body: {
                shipment: data?.shipment,
                route: data?.route,
                method: data?.method,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Get a shipping emission estimate
     * @param id The estimate unique identifier
     * @param options Additional operation options
     * @returns SingleShippingEmissionEstimate OK
     */
    public getShippingEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SingleShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/shipping/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Update a shipping emission estimate
     * @param id The estimate unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns SingleShippingEmissionEstimate OK
     */
    public updateShippingEstimate(
        id: string,
        data: {
            shipment: Shipment
            route: ShippingRoute
            method: ShippingMethod
            countryCode?: ShippingCountryCode
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<SingleShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/shipping/{id}',
            path: {
                id: id,
            },
            body: {
                shipment: data?.shipment,
                route: data?.route,
                method: data?.method,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                409: `Conflict`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create a multi-leg shipping emission estimate
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * Each leg can be fulfilled by a different method, eg a truck, a plane or other options.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns MultiLegShippingEmissionEstimate OK
     */
    public createMultiLegShippingEstimate(
        data: {
            shipment: Shipment
            legs: Array<{
                route: ShippingRoute
                method: ShippingMethod
                countryCode?: ShippingCountryCode
            }>
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<MultiLegShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/shipping/multi-leg',
            body: {
                shipment: data?.shipment,
                legs: data?.legs,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Get a multi-leg shipping emission estimate
     * @param id The estimate unique identifier
     * @param options Additional operation options
     * @returns MultiLegShippingEmissionEstimate OK
     */
    public getMultiLegShippingEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<MultiLegShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/shipping/multi-leg/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Update a multi-leg shipping emission estimate
     * @param id The estimate unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns MultiLegShippingEmissionEstimate OK
     */
    public updateMultiLegShippingEstimate(
        id: string,
        data: {
            shipment: Shipment
            legs: Array<{
                route: ShippingRoute
                method: ShippingMethod
                countryCode?: ShippingCountryCode
            }>
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<MultiLegShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/shipping/multi-leg/{id}',
            path: {
                id: id,
            },
            body: {
                shipment: data?.shipment,
                legs: data?.legs,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                409: `Conflict`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create a transaction emission estimate
     * Estimate emissions produced by purchasing goods or services.
     *
     * `value` and `merchant` tell us what's the value of the transaction and who the goods or services
     * have been purchased from. `value` should exclude shipping and taxes – if it doesn't, then the
     * results are likely to be higher than they should be.
     *
     * `diet`, if provided, will affect the estimates for purchases we determine are food-related.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionEstimateResponse OK
     */
    public createTransactionEstimate(
        data: {
            value: MonetaryAmount
            merchant: Merchant
            diet?: Diet
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/transactions',
            body: {
                value: data?.value,
                merchant: data?.merchant,
                diet: data?.diet,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create a company emission estimate
     * Estimate emissions produced by a company. This includes office-related emissions,
     * employee transportation, food, drinks, electronic equipment and computing/networking
     * operations.
     *
     * The result is an estimate of a year-worth of company emissions.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns CompanyEmissionEstimate OK
     */
    public createCompanyEstimate(
        data: {
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
            /**
             * The company's postal code
             */
            postcode?: string
            city?: string
            tech?: {
                onPremise?: CompanyOnPremiseUse
                cloud?: CompanyCloudUse
            }
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<CompanyEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/company',
            body: {
                employees: data?.employees,
                remote_employees_percentage: data?.remoteEmployeesPercentage,
                office_area: data?.officeArea,
                country_code: data?.countryCode,
                postcode: data?.postcode,
                city: data?.city,
                electricity_consumption: data?.electricityConsumption,
                green_electricity_used: data?.greenElectricityUsed,
                gas_consumption: data?.gasConsumption,
                company_cars: data?.companyCars,
                average_car_distance_travelled: data?.averageCarDistanceTravelled,
                employees_using_public_transport: data?.employeesUsingPublicTransport,
                short_flights: data?.shortFlights,
                medium_flights: data?.mediumFlights,
                long_flights: data?.longFlights,
                first_or_business_class_percentage: data?.firstOrBusinessClassPercentage,
                food_and_drinks_expenses: data?.foodAndDrinksExpenses,
                vegetarian_and_vegan_percentage: data?.vegetarianAndVeganPercentage,
                electronic_device_expenses: data?.electronicDeviceExpenses,
                garbage: data?.garbage,
                recycled_garbage_percentage: data?.recycledGarbagePercentage,
                tech: data?.tech,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }

    /**
     * Create an individual's emission estimate
     * Estimate emissions produced by an individual for a year. This includes travel emissions, food, drinks, energy and shopping activities.
     *
     * The result is an estimate of a year-worth of emissions.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionEstimateResponse OK
     */
    public createIndividualEstimate(
        data: {
            /**
             * The three-letter country code of the country where the company is located.
             */
            countryCode: string
            /**
             * Does the individual use a car?
             */
            carUse: boolean
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
            /**
             * How is the car powered?
             */
            carFuelType?: 'gasoline' | 'electric' | 'hybrid'
            /**
             * Average yearly distance travelled per car
             */
            averageCarDistanceTravelled?: Distance
            /**
             * Other such as phone, laptops, any other "item" you can think of.
             */
            monthlyOtherExpenses?: MonetaryAmount
            bundleSelection?: BundleSelectionRequest
            /**
             * This property represents the level of precision used to truncate quantities assigned to each bundle.
             *
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionEstimateResponse, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/individual',
            body: {
                country_code: data?.countryCode,
                car_use: data?.carUse,
                car_fuel_type: data?.carFuelType,
                average_car_distance_travelled: data?.averageCarDistanceTravelled,
                short_flights: data?.shortFlights,
                medium_flights: data?.mediumFlights,
                long_flights: data?.longFlights,
                days_per_week_using_public_transport: data?.daysPerWeekUsingPublicTransport,
                diet: data?.diet,
                monthly_grocery_expenses: data?.monthlyGroceryExpenses,
                monthly_restaurant_expenses: data?.monthlyRestaurantExpenses,
                monthly_clothing_expenses: data?.monthlyClothingExpenses,
                monthly_furniture_appliances_expenses: data?.monthlyFurnitureAppliancesExpenses,
                monthly_other_expenses: data?.monthlyOtherExpenses,
                electricity_consumption: data?.electricityConsumption,
                green_electricity_used: data?.greenElectricityUsed,
                gas_consumption: data?.gasConsumption,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                409: `Conflict`,
                415: `Unsupported Media Type`,
                429: `Too Many Requests`,
                503: `Service Unavailable`,
            },
        })
    }
}
