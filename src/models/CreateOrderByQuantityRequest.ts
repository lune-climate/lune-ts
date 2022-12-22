/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateOrderByQuantityWithBundleMass } from './CreateOrderByQuantityWithBundleMass'
import type { CreateOrderByQuantityWithBundlePercentage } from './CreateOrderByQuantityWithBundlePercentage'

export type CreateOrderByQuantityRequest =
    | CreateOrderByQuantityWithBundlePercentage
    | CreateOrderByQuantityWithBundleMass
