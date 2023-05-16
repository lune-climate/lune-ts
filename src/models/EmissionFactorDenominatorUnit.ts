/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrencyCode } from './CurrencyCode'
import type { DistanceUnit } from './DistanceUnit'

export type EmissionFactorDenominatorUnit =
    | CurrencyCode
    | DistanceUnit
    | 'item'
    | 'MJ'
    | 'guest*night'
    | 'ha'
    | 'hour'
    | 'kWh'
    | 'kg'
    | 'kg*day'
    | 'km*year'
    | 'l'
    | 'm*year'
    | 'm2'
    | 'm2*year'
    | 'm3'
    | 't*km'
    | 'person*km'
