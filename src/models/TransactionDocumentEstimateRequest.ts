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

import type { BaseEstimateRequest } from './BaseEstimateRequest.js'
import type { IsTransactionDocument } from './IsTransactionDocument.js'
import type { TransactionDocumentProcessedAt } from './TransactionDocumentProcessedAt.js'
import type { TransactionEstimateRequestData } from './TransactionEstimateRequestData.js'
import type { UnstructuredKeyValue } from './UnstructuredKeyValue.js'

export type TransactionDocumentEstimateRequest = {
    /**
     * Add unstructured JSON data representing the document to calculate its emission estimate.
     */
    unstructuredData: {
        keyValue?: UnstructuredKeyValue
    }
    isTransactionDocument?: IsTransactionDocument
    transactionDocumentProcessedAt?: TransactionDocumentProcessedAt
} & BaseEstimateRequest &
    TransactionEstimateRequestData
