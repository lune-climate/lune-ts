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
import type { IsTransaction } from './IsTransaction.js'
import type { Metadata } from './Metadata.js'
import type { TransactionProcessedAt } from './TransactionProcessedAt.js'

export type UpdateTransactionEstimateAnnotationsRequest = {
    isTransaction?: IsTransaction
    transactionProcessedAt?: TransactionProcessedAt
    metadata?: Metadata
    idempotencyKey?: EstimateIdempotencyKey
}
