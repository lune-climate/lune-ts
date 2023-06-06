/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { EmissionEstimateResponse } from './EmissionEstimateResponse'
import type { MultiLegShippingEstimateRequest } from './MultiLegShippingEstimateRequest'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate'

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
    legs: Array<ShippingLegEmissionEstimate>
    distance?: Distance
    request: MultiLegShippingEstimateRequest
} & EmissionEstimateResponse
