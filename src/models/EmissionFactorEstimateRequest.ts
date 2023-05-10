/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundleSelectionRequest } from './BundleSelectionRequest'
import type { EmissionFactorActivity } from './EmissionFactorActivity'
import type { MassUnit } from './MassUnit'

export type EmissionFactorEstimateRequest = {
    /**
     * The emission factor unique identifier
     */
    emissionFactorId: string
    /**
     * A measure of the activity being estimated
     */
    activity: EmissionFactorActivity
    /**
     * A name to reference this calculation.
     */
    name?: string
    bundleSelection?: BundleSelectionRequest
    /**
     * Selects to which precision to truncate the quantities assigned to each bundle.
     */
    quantityTrunc?: MassUnit
}
