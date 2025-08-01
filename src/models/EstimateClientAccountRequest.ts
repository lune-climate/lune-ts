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

import type { AccountCurrencyCode } from './AccountCurrencyCode.js'
import type { AccountExternalPagesVisibility } from './AccountExternalPagesVisibility.js'
import type { AccountHandle } from './AccountHandle.js'
import type { AccountIdempotencyKey } from './AccountIdempotencyKey.js'

/**
 * Perform the estimate request on behalf of a client account.
 *
 * The client account is identfied by the `handle` or `idempotency_key`.
 *
 * The client account is created if it does not exist.
 *
 * For existing client accounts, if both `handle` and `idempotency_key` are provided,
 * they must be consistent with the existing client account. Other properties are ignored.
 *
 */
export type EstimateClientAccountRequest =
    | {
          /**
           * The account name.
           */
          name: string
          currency: AccountCurrencyCode
          /**
           * The account beneficiary. Leading and trailing spaces are removed.
           */
          beneficiary?: string
          externalPagesVisibility?: AccountExternalPagesVisibility
          handle: AccountHandle
      }
    | {
          /**
           * The account name.
           */
          name: string
          currency: AccountCurrencyCode
          /**
           * The account beneficiary. Leading and trailing spaces are removed.
           */
          beneficiary?: string
          externalPagesVisibility?: AccountExternalPagesVisibility
          handle?: AccountHandle
          idempotencyKey: AccountIdempotencyKey
      }
