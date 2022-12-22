/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderQuoteByQuantityWithBundleMass } from './OrderQuoteByQuantityWithBundleMass'
import type { OrderQuoteByQuantityWithBundlePercentage } from './OrderQuoteByQuantityWithBundlePercentage'

export type OrderQuoteByQuantityRequest =
    | OrderQuoteByQuantityWithBundlePercentage
    | OrderQuoteByQuantityWithBundleMass
