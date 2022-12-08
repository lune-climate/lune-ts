/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmptyObject } from './EmptyObject'
import type { Errors } from './Errors'
import type { TransactionEmissionEstimate } from './TransactionEmissionEstimate'

export type BatchTransactionEmissionEstimate = Array<
    TransactionEmissionEstimate | Errors | EmptyObject
>
