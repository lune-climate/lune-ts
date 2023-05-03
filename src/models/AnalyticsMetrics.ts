/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SupportedUNSdg } from './SupportedUNSdg'

export type AnalyticsMetrics = {
    /**
     * The number of supported UN Sustainable Development Goals (SDGs).
     */
    numberOfUnSdgs: number
    /**
     * The number of supported carbon offset projects.
     */
    numberOfProjects: number
    unSdg: SupportedUNSdg
}
