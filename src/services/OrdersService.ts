/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateOrderByEstimateRequest } from '../models/CreateOrderByEstimateRequest.js'
import type { CreateOrderByQuantityRequest } from '../models/CreateOrderByQuantityRequest.js'
import type { CreateOrderByValueRequest } from '../models/CreateOrderByValueRequest.js'
import type { Order } from '../models/Order.js'
import type { OrderByEstimate } from '../models/OrderByEstimate.js'
import type { OrderByQuantity } from '../models/OrderByQuantity.js'
import type { OrderByValue } from '../models/OrderByValue.js'
import type { OrderQuoteByQuantity } from '../models/OrderQuoteByQuantity.js'
import type { OrderQuoteByQuantityRequest } from '../models/OrderQuoteByQuantityRequest.js'
import type { OrderQuoteByValue } from '../models/OrderQuoteByValue.js'
import type { OrderQuoteByValueRequest } from '../models/OrderQuoteByValueRequest.js'
import type { PaginatedOrders } from '../models/PaginatedOrders.js'

import { ClientConfig } from '../core/ClientConfig.js'
import { request as __request } from '../core/request.js'
import { ApiError } from '../core/ApiError.js'
import { AxiosInstance } from 'axios'
import { Result } from 'ts-results-es'

export abstract class OrdersService {
    protected abstract client: AxiosInstance
    protected abstract config: ClientConfig

    /**
     * Create an order by mass
     * Create an order to purchase carbon offset by specifying a mass in tonnes or kilograms.
     * @param requestBody
     * @returns OrderByQuantity Order created successfully.
     * The response returns an Order object.
     *
     */
    public createOrderByMass(
        requestBody: CreateOrderByQuantityRequest,
    ): Promise<Result<OrderByQuantity, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/orders/by-mass',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                409: `Conflict

                Examples:
                1. account is suspended
                2. order idempotency failure: an order with the same idempotency_key has already by created
                `,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create an order by value
     * Create an order to purchase carbon offset by specifying a maximum purchase value.
     * @param requestBody
     * @returns OrderByValue Order created successfully.
     * The response returns an Order object.
     *
     */
    public createOrderByValue(
        requestBody: CreateOrderByValueRequest,
    ): Promise<Result<OrderByValue, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/orders/by-value',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                409: `Conflict

                Examples:
                1. account is suspended
                2. order idempotency failure: an order with the same idempotency_key has already by created
                `,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Create an order from an emission estimate
     * Create an order to purchase carbon offset by specifying an estimate id
     * @param requestBody
     * @returns OrderByEstimate Order created successfully.
     * The response returns an Order object.
     *
     */
    public createOrderByEstimate(
        requestBody: CreateOrderByEstimateRequest,
    ): Promise<Result<OrderByEstimate, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/orders/by-estimate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                409: `Conflict

                Examples:
                1. account is suspended
                2. order idempotency failure: an order with the same idempotency_key has already by created
                `,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get orders
     * Returns paginated account orders ordered by creation date descending
     *
     * The API key used to access this method affects what orders are returned: test orders for the test
     * API key, live orders for the live one.
     *
     * @param limit Default is 10.
     * Maximum number of resources to return, between 1 and 100.
     * @param after A cursor for use in pagination.
     *
     * *after* is an object ID that defines your place in the list.
     *
     * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
     *
     * @param offsetLinkId Filter orders by offset_link_id.
     *
     *
     * If offset_link_id is set, the response will only include orders belonging to the particular offset link.
     *
     * @returns PaginatedOrders The response returns paginated orders
     */
    public getOrders(
        limit?: string,
        after?: string,
        offsetLinkId?: string,
    ): Promise<Result<PaginatedOrders, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/orders',
            query: {
                limit: limit,
                after: after,
                offset_link_id: offsetLinkId,
            },
            errors: {
                401: `Unauthorized. The API Key is invalid or disabled.`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get an order
     * Returns an order by id if it exists.
     *
     * @param id The order's unique identifier
     * @returns Order The response returns an order
     */
    public getOrderById(id: string): Promise<Result<Order, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/orders/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `The order does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get a carbon offset certificate
     * Download a Carbon Offset Certificate for a completed order.
     *
     * @param id The order's unique identifier
     * @returns binary The response returns the Carbon Offset Certificate
     */
    public getOrderCertificateById(id: string): Promise<Result<Blob, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/orders/{id}/certificate',
            path: {
                id: id,
            },
            errors: {
                404: `The order or the certificate does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Get an order by idempotency key
     * Returns an order by idempotency key if it exists.
     *
     * @param idempotencyKey The order's idempotency key
     * @returns Order The response returns an order
     */
    public getOrderByIdempotencyKey(idempotencyKey: string): Promise<Result<Order, ApiError>> {
        return __request(this.client, this.config, {
            method: 'GET',
            url: '/orders/by-idempotency-key/{idempotencyKey}',
            path: {
                idempotencyKey: idempotencyKey,
            },
            errors: {
                404: `The order does not exist`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Calculate an order quote by mass
     * This endpoint does not create an order.
     *
     * However, it processes the order as if it were placed returning estimated cost and bundles allocations.
     *
     * @param requestBody
     * @returns OrderQuoteByQuantity Order quote processed successfully.
     *
     */
    public getOrderQuoteByMass(
        requestBody: OrderQuoteByQuantityRequest,
    ): Promise<Result<OrderQuoteByQuantity, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/orders/by-mass/quote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }

    /**
     * Calculate an order quote by value
     * This endpoint does not create an order.
     *
     * However, it processes the order as if it were placed returning estimated cost and bundles allocations.
     *
     * @param requestBody
     * @returns OrderQuoteByValue Order quote processed successfully.
     *
     */
    public getOrderQuoteByValue(
        requestBody: OrderQuoteByValueRequest,
    ): Promise<Result<OrderQuoteByValue, ApiError>> {
        return __request(this.client, this.config, {
            method: 'POST',
            url: '/orders/by-value/quote',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The API Key is invalid or disabled.`,
                415: `The request is not an application/json encoded request`,
                429: `Rate limit exceeded`,
            },
        })
    }
}
