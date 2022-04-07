/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address'
import type { GeographicCoordinates } from './GeographicCoordinates'

export type SourceDestination = {
    source: Address | GeographicCoordinates
    destination: Address | GeographicCoordinates
}
