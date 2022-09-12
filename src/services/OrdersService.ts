/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BundleSelectionRequest } from '../models/BundleSelectionRequest.js'
import type { Mass } from '../models/Mass.js'
import type { MassUnit } from '../models/MassUnit.js'
import type { Metadata } from '../models/Metadata.js'
import type { Order } from '../models/Order.js'
import type { OrderByEstimate } from '../models/OrderByEstimate.js'
import type { OrderByQuantity } from '../models/OrderByQuantity.js'
import type { OrderByValue } from '../models/OrderByValue.js'
import type { OrderQuoteByQuantity } from '../models/OrderQuoteByQuantity.js'
import type { OrderQuoteByValue } from '../models/OrderQuoteByValue.js'
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
     * @param data Request data
     * @param options Additional operation options
     * @returns OrderByQuantity OK
     */
    public createOrderByMass(
        data: {
            /**
             * Mass of CO2 offsets to purchase
             */
            mass: Mass
            /**
             * Account-unique identifier provided by the client.
             *
             * `idempotency_key` has two purposes:
             * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
             * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
             *
             */
            idempotencyKey?: string
            /**
             * Bundle selection to be used for the order.
             * For the order, this property overrides the account's bundle selection.
             *
             */
            bundleSelection?: BundleSelectionRequest
            metadata?: Metadata
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
    ): Promise<Result<OrderByQuantity, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/orders/by-mass',
            body: {
                mass: data?.mass,
                idempotency_key: data?.idempotencyKey,
                bundle_selection: data?.bundleSelection,
                metadata: data?.metadata,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Create an order by value
     * @param data Request data
     * @param options Additional operation options
     * @returns OrderByValue OK
     */
    public createOrderByValue(
        data: {
            /**
             * Maximum price of CO2 offsets to purchase (in the account's currency)
             */
            value: string
            /**
             * Account-unique identifier provided by the client.
             *
             * `idempotency_key` has two purposes:
             * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
             * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
             *
             */
            idempotencyKey?: string
            /**
             * Bundle selection to be used for the order.
             * For the order, this property overrides the account's bundle selection.
             *
             */
            bundleSelection?: BundleSelectionRequest
            metadata?: Metadata
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
    ): Promise<Result<OrderByValue, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/orders/by-value',
            body: {
                value: data?.value,
                idempotency_key: data?.idempotencyKey,
                bundle_selection: data?.bundleSelection,
                metadata: data?.metadata,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Create an order by estimate id
     * @param data Request data
     * @param options Additional operation options
     * @returns OrderByEstimate OK
     */
    public createOrderByEstimate(
        data: {
            /**
             * The emission calculation unique identifier
             */
            estimateId: string
            /**
             * Account-unique identifier provided by the client.
             *
             * `idempotency_key` has two purposes:
             * 1. Clients can safely retry order requests without accidentally performing the same operation twice. The current state of the original order is returned.
             * 2. Clients can use `idempotency_key` to reconcile orders with other entities on their system.
             *
             */
            idempotencyKey?: string
            bundleSelection?: BundleSelectionRequest
            metadata?: Metadata
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
    ): Promise<Result<OrderByEstimate, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/orders/by-estimate',
            body: {
                estimate_id: data?.estimateId,
                idempotency_key: data?.idempotencyKey,
                bundle_selection: data?.bundleSelection,
                metadata: data?.metadata,
                quantity_trunc: data?.quantityTrunc,
            },
            mediaType: 'application/json',
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                409: `The request could not be completed due to a conflict with the current state of the target resource or resources`,
                415: `The payload format is in an unsupported format.`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * List orders
     * Returns the account's paginated orders in reverse order (most recent first).
     * @param data Request data
     * @param options Additional operation options
     * @returns PaginatedOrders OK
     */
    public listOrders(
        data?: {
            /**
             * Maximum number of resources to return, between 1 and 100.
             *
             */
            limit?: string
            /**
             * A cursor for use in pagination.
             *
             * *after* is an object ID that defines your place in the list.
             *
             * For instance, if you make a list request and receive 100 objects, ending with *foo*, your subsequent call can include *after=foo* in order to fetch the next page of the list.
             *
             */
            after?: string
            /**
             * Filter orders by offset_link_id.
             *
             * If offset_link_id is set, the response will only include orders belonging to the particular offset link.
             *
             */
            offsetLinkId?: string
        },
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<PaginatedOrders, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/orders',
            query: {
                limit: data?.limit,
                after: data?.after,
                offset_link_id: data?.offsetLinkId,
            },
            errors: {
                400: `The request is invalid. Parameters may be missing or are invalid`,
                401: `The API Key is missing or is invalid`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get an order
     * @param id The order's unique identifier
     * @param options Additional operation options
     * @returns Order OK
     */
    public getOrder(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Order, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/orders/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get a carbon offset certificate
     * @param id The order's unique identifier
     * @param options Additional operation options
     * @returns binary OK
     */
    public getOrderCertificate(
        id: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Blob, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/orders/{id}/certificate',
            path: {
                id: id,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Get an order by idempotency key
     * @param idempotencyKey The order's idempotency key.
     *
     * Order idempotency keys must be unique per account.
     *
     * @param options Additional operation options
     * @returns Order OK
     */
    public getOrderByIdempotencyKey(
        idempotencyKey: string,
        options?: {
            /**
             * Account Id to be used to perform the API call
             */
            accountId?: string
        },
    ): Promise<Result<Order, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'GET',
            url: '/orders/by-idempotency-key/{idempotencyKey}',
            path: {
                idempotencyKey: idempotencyKey,
            },
            errors: {
                404: `The specified resource was not found`,
                429: `Too many requests have been made in a short period of time`,
            },
        })
    }

    /**
     * Calculate an order quote by mass
     * This endpoint does not create an order.
     *
     * It processes the order as if it were placed, returning estimated cost and bundles allocations.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns OrderQuoteByQuantity OK
     */
    public getOrderQuoteByMass(
        data: {
            /**
             * Mass of CO2 offsets to purchase
             */
            mass: Mass
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
    ): Promise<Result<OrderQuoteByQuantity, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/orders/by-mass/quote',
            body: {
                mass: data?.mass,
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
            },
        })
    }

    /**
     * Calculate an order quote by value
     * This endpoint does not create an order.
     *
     * It processes the order as if it were placed, returning estimated cost and bundles allocations.
     *
     * @param data Request data
     * @param options Additional operation options
     * @returns OrderQuoteByValue OK
     */
    public getOrderQuoteByValue(
        data: {
            /**
             * Maximum price of CO2 offsets to purchase (in the account's currency)
             */
            value: string
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
    ): Promise<Result<OrderQuoteByValue, ApiError>> {
        return __request(this.client, this.config, options || {}, {
            method: 'POST',
            url: '/orders/by-value/quote',
            body: {
                value: data?.value,
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
            },
        })
    }
}
