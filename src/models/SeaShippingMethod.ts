/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HugeOilTankerSeaShippingMethod } from './HugeOilTankerSeaShippingMethod'
import type { RoRoSeaShippingMethod } from './RoRoSeaShippingMethod'
import type { VariableFuelSeaShippingMethod } from './VariableFuelSeaShippingMethod'
import type { VariableFuelVariableLoadSeaShippingMethod } from './VariableFuelVariableLoadSeaShippingMethod'

export type SeaShippingMethod =
    | VariableFuelSeaShippingMethod
    | VariableFuelVariableLoadSeaShippingMethod
    | RoRoSeaShippingMethod
    | HugeOilTankerSeaShippingMethod
