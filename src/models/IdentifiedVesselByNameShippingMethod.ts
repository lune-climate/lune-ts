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

import type { ContainerShippingMethod } from './ContainerShippingMethod.js'

/**
 * This method uses the vessel's name to select an emission factors, falling back to trade lane emissions factors if provided. If the vessel name matches
 * multiple vessels with different IMO's or no vessel at all, the fallback is used.
 *
 */
export type IdentifiedVesselByNameShippingMethod =
    | {
          /**
           * The vessel's name, case-insensitive.
           *
           */
          vesselName: string
      }
    | ({
          /**
           * The vessel's name.
           *
           */
          vesselName: string
      } & ContainerShippingMethod)
