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

import type { Distance } from './Distance.js'
import type { EmissionEstimateResponse } from './EmissionEstimateResponse.js'
import type { MultiLegShippingEstimateRequest } from './MultiLegShippingEstimateRequest.js'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate.js'

/**
 * An emission estimate result for a transport involving multiple legs.
 *
 * Lune's API returns both the total emissions and per-leg emissions (in the `legs`
 * property).
 *
 * The ordering of the legs in the estimate is the same as the ordering of the inputs.
 *
 * An error with estimating any of the legs will result in the whole estimation process
 * failing completely (we don't provide partial estimates in light of a failure).
 *
 */
export type MultiLegShippingEmissionEstimate = {
    /**
     * When true, the estimate refers to a shipment.
     * This property exists in order for clients to distinguish between estimates made for informative purposes or during booking flows from estimates made for shipments where goods are moved.
     *
     */
    isShipment: boolean
    /**
     * An array representing a leg's emission estimate.
     *
     * Returned in the same order as the request.
     *
     */
    legs: Array<ShippingLegEmissionEstimate>
    distance: Distance
    request: MultiLegShippingEstimateRequest
} & EmissionEstimateResponse
