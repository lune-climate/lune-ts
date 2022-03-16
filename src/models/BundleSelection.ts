/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlePercentage } from './BundlePercentage'

/**
 * Optional allocation ratios by bundle.
 *
 * The sum of all allocation ratios must equal 100.
 *
 * If not specified, the preconfigured allocation ratios are going to be used.
 *
 */
export type BundleSelection = Array<BundlePercentage>
