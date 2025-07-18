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

import type { AdjustedDistance } from './AdjustedDistance.js'
import type { DataQualityGrade } from './DataQualityGrade.js'
import type { Distance } from './Distance.js'
import type { IsShipment } from './IsShipment.js'
import type { MultiLegShippingEstimateRequest } from './MultiLegShippingEstimateRequest.js'
import type { NullEnum } from './NullEnum.js'
import type { RawDistance } from './RawDistance.js'
import type { ShippedAt } from './ShippedAt.js'
import type { ShippingEmissionEstimateResponse } from './ShippingEmissionEstimateResponse.js'
import type { ShippingLegEmissionEstimate } from './ShippingLegEmissionEstimate.js'
import type { Url } from './Url.js'

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
    isShipment: IsShipment
    shippedAt: ShippedAt
    /**
     * Represents the average data quality score for each leg.
     *
     */
    dataQualityScore:
        | {
              score: DataQualityGrade
          }
        | NullEnum
    /**
     * An array representing a leg's emission estimate.
     *
     * Returned in the same order as the request.
     *
     */
    legs: Array<ShippingLegEmissionEstimate>
    rawDistance: RawDistance
    distance: Distance
    adjustedDistance: AdjustedDistance
    request: MultiLegShippingEstimateRequest
    /**
     * An external accessible URL linking to a detailed page that provides complete information about the estimate.
     */
    externalEstimateUrl: Url | NullEnum
    /**
     * Identifies the source used to create the estimate.
     */
    source?: MultiLegShippingEmissionEstimate.source
} & ShippingEmissionEstimateResponse

export namespace MultiLegShippingEmissionEstimate {
    /**
     * Identifies the source used to create the estimate.
     */
    export enum source {
        API = 'api',
        DASHBOARD = 'dashboard',
        CSV = 'csv',
        CHAIN_IO = 'chain_io',
        ECOTRANSIT_CSV = 'ecotransit_csv',
        WIDGET = 'widget',
        ECOTRANSIT = 'ecotransit',
        BLUE_YONDER = 'blue_yonder',
        RFQ = 'rfq',
    }
}
