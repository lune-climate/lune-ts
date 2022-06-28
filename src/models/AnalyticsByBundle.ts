/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuantityAndValueTimeseries } from './QuantityAndValueTimeseries'

export type AnalyticsByBundle = {
    /**
     * The bundle's unique identifier
     */
    bundleId: string
    /**
     * The bundle's name
     */
    bundleName: string
    timeseries: QuantityAndValueTimeseries
}
