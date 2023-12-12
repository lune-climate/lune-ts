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

/**
 * The date and time of shipping the goods for the purpose of analytics (it doesn't
 * affect emission calculations in any way).
 *
 * If a value is provided when creating or updating an estimate we use the value.
 * Otherwise defaults to the current time when creating estimates and remains
 * unchanged when updating estimates.
 *
 * This property must be formatted as RFC 3339, section 5.6 timestamp.
 *
 * Examples:
 * * 2023-12-01T12:30:30.000Z
 * * 2023-12-01T12:30:30Z
 * * 2023-12-01T11:30:30+01.00
 *
 */
export type ShippedAt = string