/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlePercentageRequest } from './BundlePercentageRequest'

/**
 * Optional allocation ratios by bundle.
 *
 * The sum of all allocation ratios must equal 100.
 *
 * If not specified, the preconfigured allocation ratios are going to be used.
 *
 * If, for each selection, `percentage` is not provided, the selection is divided equally (best effort) between bundles. `percentage` must be provided for all or none of the bundles.
 *
 */
export type BundleSelectionRequest = Array<BundlePercentageRequest>
