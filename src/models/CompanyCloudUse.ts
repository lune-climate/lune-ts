/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudProvider } from './CloudProvider'
import type { MonetaryAmount } from './MonetaryAmount'

/**
 * Company's use of cloud services
 */
export type CompanyCloudUse = {
    cost: MonetaryAmount
    provider: CloudProvider
}
