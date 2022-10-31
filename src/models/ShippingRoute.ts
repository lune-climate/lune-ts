/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { ShippingSourceDestination } from './ShippingSourceDestination'

/**
 * Either the shipping distance or the start/destination address pair.
 *
 * Note that for sea transport the source/destination pair should be as close to
 * locations of existing and well-known ports as possible. Coordinates or addresses
 * that lie far from the shore line or coordinates deep into the sea or ocean will
 * result in inaccurate calculations.
 *
 * When transporting goods over unusual routes or between unusual points it's better
 * to provide us the distance directly to ensure better calculations.
 *
 */
export type ShippingRoute = Distance | ShippingSourceDestination
