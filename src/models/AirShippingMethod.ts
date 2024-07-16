// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AirShippingMethod = {
    /**
     * Flight number in either ICAO or IATA format.
     */
    flightNumber: string
    /**
     * Departure date of the flight. The date is in UTC timezone. Dates that are over 24 hours in the future are not allowed.
     */
    departureOn: string
}
