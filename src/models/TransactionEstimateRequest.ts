// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EstimateIdempotencyKey } from './EstimateIdempotencyKey.js'
import type { TransactionEstimatePartialRequest } from './TransactionEstimatePartialRequest.js'
import type { TransactionProcessedAt } from './TransactionProcessedAt.js'

/**
 * Parameters for estimating emissions associated with purchasing goods or services.
 */
export type TransactionEstimateRequest = TransactionEstimatePartialRequest & {
    idempotencyKey?: EstimateIdempotencyKey
    /**
     * When true, the emission estimate refers to an actual transaction for goods or services and will be included in Lune analytics and can be included in any CO2 emissions reporting.
     *
     * This property exists to distinguish generic estimates, quotes or forecasts from actual transactions that have occured.
     *
     * You can mark an estimate as transaction at any time.
     *
     */
    isTransaction?: boolean
    transactionProcessedAt?: TransactionProcessedAt
}
