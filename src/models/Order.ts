/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderBase } from './OrderBase'
import type { OrderByQuantityProperties } from './OrderByQuantityProperties'
import type { OrderByValueProperties } from './OrderByValueProperties'

export type Order = OrderBase & (OrderByQuantityProperties | OrderByValueProperties)
