/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address'
import type { AirportCode } from './AirportCode'
import type { GeographicCoordinates } from './GeographicCoordinates'
import type { Locode } from './Locode'

export type ShippingSourceDestination = {
    source: Address | GeographicCoordinates | Locode | AirportCode
    destination: Address | GeographicCoordinates | Locode | AirportCode
}
