/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'
import type { OrderByQuantityProperties } from './OrderByQuantityProperties'
import type { OrderByValueProperties } from './OrderByValueProperties'

/**
 * An Order represents a carbon credit purchase.
 *
 * Orders are placed against one or multiple project bundles. Credits are allocated to the Order from any of the projects that belong to the bundles. These are then retired.
 *
 * An Order transitions through multiple statuses throughout its lifetime as Lune fulfills the Order.
 *
 * As soon as an Order has a credit retired, the Order's certificate can be downloaded.
 *
 */
export type Order = OrderBase & (OrderByQuantityProperties | OrderByValueProperties)
