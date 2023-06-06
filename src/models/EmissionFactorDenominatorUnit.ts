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
    | 'GJ'
    | 'guest*night'
    | 'room*night'
    | 'ha'
    | 'hour'
    | 'kWh'
    | 'kg'
    | 'kg*day'
    | 'km*year'
    | 'l'
    | 'Ml'
    | 'm*year'
    | 'm2'
    | 'm2*year'
    | 'm3'
    | 't*km'
    | 'person*km'
    | 't'
    | 'fte*working_hour'
