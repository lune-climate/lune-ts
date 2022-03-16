/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerShippingMethod } from './ContainerShippingMethod'
import type { IdentifiedVesselShippingMethod } from './IdentifiedVesselShippingMethod'
import type { SeaShippingMethod } from './SeaShippingMethod'
import type { SimpleShippingMethod } from './SimpleShippingMethod'

export type ShippingMethod =
    | SimpleShippingMethod
    | SeaShippingMethod
    | ContainerShippingMethod
    | IdentifiedVesselShippingMethod
