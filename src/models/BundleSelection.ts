/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BundlePercentage } from './BundlePercentage'

/**
 * A Bundle Selection represents an account's default project bundle ratios that are used when an order is placed without specifying project bundles.
 *
 * An account initial project bundle selection is
 * * Conserving forests in Asia - 95%
 * * Ocean Carbon Removal - 5%
 *
 */
export type BundleSelection = Array<BundlePercentage>
