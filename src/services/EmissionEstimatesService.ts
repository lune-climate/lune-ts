/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirportSourceDestination } from '../models/AirportSourceDestination.js'
import type { Area } from '../models/Area.js'
import type { BatchTransactionEmissionEstimate } from '../models/BatchTransactionEmissionEstimate.js'
import type { BundleSelectionRequest } from '../models/BundleSelectionRequest.js'
import type { CabinClass } from '../models/CabinClass.js'
import type { CompanyCloudUse } from '../models/CompanyCloudUse.js'
import type { CompanyEmissionEstimate } from '../models/CompanyEmissionEstimate.js'
import type { CompanyOnPremiseUse } from '../models/CompanyOnPremiseUse.js'
import type { Diet } from '../models/Diet.js'
import type { Distance } from '../models/Distance.js'
import type { ElectricityConsumption } from '../models/ElectricityConsumption.js'
import type { ElectricityEmissionEstimate } from '../models/ElectricityEmissionEstimate.js'
import type { EmissionFactorActivity } from '../models/EmissionFactorActivity.js'
import type { EmissionFactorEstimate } from '../models/EmissionFactorEstimate.js'
import type { FlightEmissionEstimate } from '../models/FlightEmissionEstimate.js'
import type { IndividualEmissionEstimate } from '../models/IndividualEmissionEstimate.js'
import type { IntegerPercentage } from '../models/IntegerPercentage.js'
import type { MassUnit } from '../models/MassUnit.js'
import type { Merchant } from '../models/Merchant.js'
import type { MonetaryAmount } from '../models/MonetaryAmount.js'
import type { MultiLegShippingEmissionEstimate } from '../models/MultiLegShippingEmissionEstimate.js'
import type { PassengerFlightEstimateRequest } from '../models/PassengerFlightEstimateRequest.js'
import type { PassengerRailEstimateRequest } from '../models/PassengerRailEstimateRequest.js'
import type { PassengerRoadEstimateRequest } from '../models/PassengerRoadEstimateRequest.js'
import type { PassengerTransportationEmissionEstimate } from '../models/PassengerTransportationEmissionEstimate.js'
import type { Shipment } from '../models/Shipment.js'
import type { ShippingCountryCode } from '../models/ShippingCountryCode.js'
import type { ShippingMethod } from '../models/ShippingMethod.js'
import type { ShippingRoute } from '../models/ShippingRoute.js'
import type { SingleShippingEmissionEstimate } from '../models/SingleShippingEmissionEstimate.js'
import type { TransactionEmissionEstimate } from '../models/TransactionEmissionEstimate.js'
import type { TransactionEstimateRequest } from '../models/TransactionEstimateRequest.js'

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
     * @param data Request data
     * @param options Additional operation options
     * @returns ElectricityEmissionEstimate OK
     */
    public createElectricityEstimate(
        data: {
            consumption: ElectricityConsumption
            /**
             * A name to reference this calculation.
             */
            name?: string
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
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<ElectricityEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/electricity',
            body: {
                name: data?.name,
                consumption: data?.consumption,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Get an electricity emission estimate
     * @param id The estimate's unique identifier
     * @param options Additional operation options
     * @returns ElectricityEmissionEstimate OK
     */
    public getElectricityEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<ElectricityEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/electricity/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Update an electricity emission estimate
     * Estimate emissions produced by electricity consumption.
     * @param id The estimate's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns ElectricityEmissionEstimate Estimation updated successfully.
     *
     */
    public updateElectricityEstimate(
        id: string,
        data: {
            consumption: ElectricityConsumption
            /**
             * A name to reference this calculation.
             */
            name?: string
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
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<ElectricityEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/electricity/{id}',
            path: {
                id: id,
            },
            body: {
                name: data?.name,
                consumption: data?.consumption,
                country_code: data?.countryCode,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a flight emission estimate
     * Estimate emissions produced by passengers in a commercial airflight.
     * @param data Request data
     * @param options Additional operation options
     * @returns FlightEmissionEstimate OK
     */
    public createFlightEstimate(
        data: {
            /**
             * Either the flight distance or the start/destination airport code (ICAO or IATA).
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
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
            /**
             * A name used to reference this calculation.
             */
            name?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<FlightEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/flight',
            body: {
                route: data?.route,
                cabin_class: data?.cabinClass,
                passengers: data?.passengers,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
                name: data?.name,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a passenger transportation emission estimate
     * Estimate emissions produced by passenger transportation, for instance commercial flight, rail, road.
     * @param data Request data
     * @param options Additional operation options
     * @returns PassengerTransportationEmissionEstimate OK
     */
    public createPassengerTransportationEstimate(
        data: {
            legs: Array<
                | PassengerRoadEstimateRequest
                | PassengerRailEstimateRequest
                | PassengerFlightEstimateRequest
            >
            /**
             * Number of passengers the calculation should be applied to.
             */
            passengers?: number
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
            /**
             * A name to reference this calculation.
             */
            name?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PassengerTransportationEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/passenger-transportation',
            body: {
                passengers: data?.passengers,
                legs: data?.legs,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
                name: data?.name,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a shipping emission estimate (single)
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
            /**
             * A name to reference this calculation.
             */
            name?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
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
                name: data?.name,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Get a shipping emission estimate (single)
     * @param id The estimate's unique identifier
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
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Update a shipping emission estimate (single)
     * @param id The estimate's unique identifier
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
            /**
             * A name to reference this calculation.
             */
            name?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
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
                name: data?.name,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a shipping emission estimate (multi-leg)
     * Each leg can be fulfilled by a different method, eg a truck, a plane or other options.
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
            /**
             * A name to reference this calculation.
             */
            name?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
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
                name: data?.name,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Get a shipping emission estimate (multi-leg)
     * @param id The estimate's unique identifier
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
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Update a shipping emission estimate (multi-leg)
     * @param id The estimate's unique identifier
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
            /**
             * A name to reference this calculation.
             */
            name?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
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
                name: data?.name,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a transaction emission estimate (single)
     * @param data Request data
     * @param options Additional operation options
     * @returns TransactionEmissionEstimate OK
     */
    public createTransactionEstimate(
        data: {
            /**
             * Monetary value of the transaction. This should exclude shipping and taxes.
             */
            value: MonetaryAmount
            /**
             * Merchant from whom the goods or services the purchase was made
             */
            merchant: Merchant
            /**
             * A name to reference this calculation.
             */
            name?: string
            /**
             * Individual diet. Used to better estimate  food-related purchases.
             */
            diet?: Diet
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<TransactionEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/transactions',
            body: {
                name: data?.name,
                value: data?.value,
                merchant: data?.merchant,
                diet: data?.diet,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create a transaction emission estimate (batch)
     * Perform multiple transaction emissions estimate in one request.
     *
     * Each estimate is handled individually.
     *
     * The response contains estimates or errors in the same orders as the request.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns BatchTransactionEmissionEstimate OK
     */
    public createBatchTransactionEstimate(
        data: {
            batchTransactionEstimateRequest: Array<TransactionEstimateRequest>
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<BatchTransactionEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/transactions/batch',
            body: data?.batchTransactionEstimateRequest,
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Get a transaction emission estimate
     * @param id The estimate's unique identifier
     * @param options Additional operation options
     * @returns TransactionEmissionEstimate OK
     */
    public getTransactionEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<TransactionEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/transactions/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Update a transaction emission estimate
     * @param id The estimate's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns TransactionEmissionEstimate OK
     */
    public updateTransactionEstimate(
        id: string,
        data: {
            /**
             * Monetary value of the transaction. This should exclude shipping and taxes.
             */
            value: MonetaryAmount
            /**
             * Merchant from whom the goods or services the purchase was made
             */
            merchant: Merchant
            /**
             * A name to reference this calculation.
             */
            name?: string
            /**
             * Individual diet. Used to better estimate  food-related purchases.
             */
            diet?: Diet
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<TransactionEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/transactions/{id}',
            path: {
                id: id,
            },
            body: {
                name: data?.name,
                value: data?.value,
                merchant: data?.merchant,
                diet: data?.diet,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
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
             * Number of months covered by the emission estimate
             */
            months?: number
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
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
            /**
             * A name to reference this calculation.
             */
            name?: string
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
                months: data?.months,
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
                name: data?.name,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Get a company emission estimate
     * @param id The estimate's unique identifier
     * @param options Additional operation options
     * @returns CompanyEmissionEstimate OK
     */
    public getCompanyEstimate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<CompanyEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/estimates/company/{id}',
            path: {
                id: id,
            },
            errors: {
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Update a company emissions estimate
     * @param id The estimate's unique identifier
     * @param data Request data
     * @param options Additional operation options
     * @returns CompanyEmissionEstimate OK
     */
    public updateCompanyEstimate(
        id: string,
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
             * Number of months covered by the emission estimate
             */
            months?: number
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
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
            /**
             * A name to reference this calculation.
             */
            name?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<CompanyEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'PUT',
            url: '/estimates/company/{id}',
            path: {
                id: id,
            },
            body: {
                months: data?.months,
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
                name: data?.name,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                404: `The specified resource was not found`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
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
     * @returns IndividualEmissionEstimate OK
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
             * Other such as phone, laptops, any other "item" you can think of.
             */
            monthlyOtherExpenses: MonetaryAmount
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
             * A name to reference this calculation.
             */
            name?: string
            /**
             * How is the car powered?
             */
            carFuelType?: 'gasoline' | 'electric' | 'hybrid'
            /**
             * Average yearly distance travelled per car
             */
            averageCarDistanceTravelled?: Distance
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<IndividualEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/individual',
            body: {
                name: data?.name,
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
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
                503: `The service is temporarily unavailable. You may retry.`,
            },
        })
    }

    /**
     * Create an estimate using a specific emission factor
     * @param data Request data
     * @param options Additional operation options
     * @returns EmissionFactorEstimate OK
     */
    public createEmissionFactorEstimate(
        data: {
            /**
             * The emission factor unique identifier
             */
            emissionFactorId: string
            /**
             * A measure of the activity being estimated
             */
            activity: EmissionFactorActivity
            /**
             * A name to reference this calculation.
             */
            name?: string
            bundleSelection?: BundleSelectionRequest
            /**
             * Selects to which precision to truncate the quantities assigned to each bundle.
             */
            quantityTrunc?: MassUnit
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<EmissionFactorEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/estimates/emission-factor',
            body: {
                emission_factor_id: data?.emissionFactorId,
                activity: data?.activity,
                name: data?.name,
                bundle_selection: data?.bundleSelection,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                403: `The API Key is not authorized to perform the operation`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }
}
