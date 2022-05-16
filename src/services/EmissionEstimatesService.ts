/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyEmissionEstimate } from '../models/CompanyEmissionEstimate.js'
import type { CompanyEstimateRequest } from '../models/CompanyEstimateRequest.js'
import type { ElectricityEstimateRequest } from '../models/ElectricityEstimateRequest.js'
import type { EmissionEstimate } from '../models/EmissionEstimate.js'
import type { FlightEstimateRequest } from '../models/FlightEstimateRequest.js'
import type { IndividualEstimateRequest } from '../models/IndividualEstimateRequest.js'
import type { MultiLegShippingEmissionEstimate } from '../models/MultiLegShippingEmissionEstimate.js'
import type { MultiLegShippingEstimateRequest } from '../models/MultiLegShippingEstimateRequest.js'
import type { ShippingEstimateRequest } from '../models/ShippingEstimateRequest.js'
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
     * Estimate electricity emissions
     * Estimate emissions produced by electricity consumption.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param requestBody
     * @returns EmissionEstimate Estimation calculated successfully.
     *
     */
    public getElectricityEstimate(
        requestBody: ElectricityEstimateRequest,
    ): Promise<Result<EmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/electricity',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate flight emissions
     * Estimate emissions produced by passengers in a commercial airflight.
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param requestBody
     * @returns EmissionEstimate Estimation calculated successfully.
     *
     */
    public getFlightEstimate(
        requestBody: FlightEstimateRequest,
    ): Promise<Result<EmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/flight',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate shipping emissions
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
     * @param requestBody
     * @returns EmissionEstimate Estimation calculated successfully.
     *
     */
    public getShippingEstimate(
        requestBody: ShippingEstimateRequest,
    ): Promise<Result<EmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/shipping',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate shipping emissions for multi-leg journeys (a track and a plane, for example).
     *
     * The value returned is in CO2e – it accounts for both CO2 and non-CO2 emissions.
     *
     * @param requestBody
     * @returns MultiLegShippingEmissionEstimate Estimation calculated successfully.
     *
     */
    public getMultiLegShippingEstimate(
        requestBody: MultiLegShippingEstimateRequest,
    ): Promise<Result<MultiLegShippingEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/shipping/multi-leg',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate transaction-related emissions
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
     * @param requestBody
     * @returns EmissionEstimate Estimation calculated successfully.
     *
     */
    public getTransactionEstimate(
        requestBody: TransactionEstimateRequest,
    ): Promise<Result<EmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/transactions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate company-wide emissions
     * Estimate emissions produced by a company. This includes office-related emissions,
     * employee transportation, food, drinks, electronic equipment and computing/networking
     * operations.
     *
     * The result is an estimate of a year-worth of company emissions.
     *
     * @param requestBody
     * @returns CompanyEmissionEstimate Estimation calculated successfully.
     *
     */
    public getCompanyEstimate(
        requestBody: CompanyEstimateRequest,
    ): Promise<Result<CompanyEmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/company',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }

    /**
     * Estimate individual annual emissions
     * Estimate emissions produced by an individual for a year. This includes travel emissions, food, drinks, energy and shopping activities.
     *
     * The result is an estimate of a year-worth of emissions.
     *
     * @param requestBody
     * @returns EmissionEstimate Estimation calculated successfully.
     *
     */
    public getIndividualEstimate(
        requestBody: IndividualEstimateRequest,
    ): Promise<Result<EmissionEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/estimates/individual',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
                503: `The service is temporarily unavailable`,
            },
        })
    }
}
