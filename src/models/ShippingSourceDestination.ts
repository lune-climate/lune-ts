/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address'
import type { AirportCode } from './AirportCode'
import type { GeographicCoordinates } from './GeographicCoordinates'
import type { SeaportCode } from './SeaportCode'

export type ShippingSourceDestination = {
    source: Address | GeographicCoordinates | SeaportCode | AirportCode
    destination: Address | GeographicCoordinates | SeaportCode | AirportCode
}
