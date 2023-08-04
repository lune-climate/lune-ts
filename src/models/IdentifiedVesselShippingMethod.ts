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
 * This method uses the vessel's IMO number emission factors when found, falling back to trade lane emissions factors if provided.
 *
 */
export type IdentifiedVesselShippingMethod =
    | {
          /**
           * The vessel's [IMO number](https://en.wikipedia.org/wiki/IMO_number) *without* the `IMO` prefix.
           *
           */
          vesselImoNumber: string
      }
    | ({
          /**
           * The vessel's [IMO number](https://en.wikipedia.org/wiki/IMO_number) *without* the `IMO` prefix.
           *
           */
          vesselImoNumber: string
      } & ContainerShippingMethod)
