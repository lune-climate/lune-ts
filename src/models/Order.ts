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

import type { OrderBase } from './OrderBase.js'
import type { OrderByEstimateProperties } from './OrderByEstimateProperties.js'
import type { OrderByQuantityProperties } from './OrderByQuantityProperties.js'
import type { OrderByValueProperties } from './OrderByValueProperties.js'

/**
 * An Order represents a carbon credit purchase.
 *
 * Orders are placed against one or multiple project bundles. Credits are allocated to the Order from any of the projects that belong to the bundles. These are then retired.
 *
 * An Order transitions through multiple statuses throughout its lifetime as Lune fulfills the Order.
 *
 * As soon as an Order has a credit retired, the Order's certificate can be downloaded.
 *
 */
export type Order = OrderBase &
    (OrderByQuantityProperties | OrderByEstimateProperties | OrderByValueProperties)
