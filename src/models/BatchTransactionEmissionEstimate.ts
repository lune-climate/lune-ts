/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmptyObject } from './EmptyObject'
import type { Errors } from './Errors'
import type { TransactionEmissionEstimate } from './TransactionEmissionEstimate'

/**
 * An array representing multiple transaction emission estimates.
 *
 * Returned in the same order as the request.
 *
 */
export type BatchTransactionEmissionEstimate = Array<
    TransactionEmissionEstimate | Errors | EmptyObject
>
