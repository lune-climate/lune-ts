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

import type { BundleMass } from './BundleMass.js'
import type { QuantityTrunc } from './QuantityTrunc.js'

/**
 * Order by Quantity details
 */
export type OrderQuoteByQuantityWithBundleMass = {
    /**
     * An array of `{ bundle_id, mass }` objects.
     *
     * Populate the array to purchase carbon credits, belonging to multiple bundles, by quantity, eg 20 tCO₂.
     *
     */
    bundleMasses: Array<BundleMass>
    quantityTrunc?: QuantityTrunc
}
