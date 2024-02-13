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

import type { IdentifiedVesselByIMOShippingMethod } from './IdentifiedVesselByIMOShippingMethod.js'
import type { IdentifiedVesselByNameShippingMethod } from './IdentifiedVesselByNameShippingMethod.js'
import type { Timestamp } from './Timestamp.js'

/**
 * This method uses either the vessel's IMO number or the vessel name in order to select an emission factor, falling back to trade lane emissions factors if provided.
 *
 * If vessel tracking is to be used the `vessel_tracking` data needs to be provided.
 *
 */
export type IdentifiedVesselShippingMethod = (
    | IdentifiedVesselByIMOShippingMethod
    | IdentifiedVesselByNameShippingMethod
) & {
    vesselTracking?: {
        /**
         * The timestamp of the departure from the source port.
         *
         * The more precise the better. Rule of thumb: you can be half a day off
         * and a vessel should still be tracked correctly unless the transport is
         * significantly shorter than half a day.
         *
         */
        departureAt: Timestamp
        /**
         * The timestamp of the arrival to the destination port.
         *
         * The more precise the better. Rule of thumb: you can be half a day off
         * and a vessel should still be tracked correctly unless the transport is
         * significantly shorter than half a day.
         *
         * We can only perform vessel tracking for shipments that finished more than
         * 24 hours ago.
         *
         */
        arrivalAt: Timestamp
        /**
         * The vessel's MMSI number at the time of arrival to the destination port.
         *
         * Optional but can help with identifying the vessel to track if provided.
         *
         */
        mmsiNumber?: string
    }
}
