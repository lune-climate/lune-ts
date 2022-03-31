/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Mass } from './Mass'

/**
 * Either a mass given in kilograms or tonnes (`mass`) or the number of [Twenty-foot Equivalent
 * Units (TEUs)](https://en.wikipedia.org/wiki/Twenty-foot_equivalent_unit) (with their cargo type,
 * optionally). Note that providing `mass` will result in more accurate estimates for methods other
 * than `container_ship`. Estimates using `container_ship` are more precise when the shipment is given
 * in TEUs.
 *
 */
export type Shipment =
    | {
          mass: Mass
      }
    | {
          containers: string
          cargoType: 'lightweight' | 'average' | 'heavyweight' | 'container_only'
      }
