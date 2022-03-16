/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An arbitrary dictionary (key-value pairs) to store application-specific information.
 *
 * Lune doesn't use this information for order processing. Its purpose is for the API
 * clients to be able to attach arbitrary information (to an order for example) and
 * then retrieve it.
 *
 */
export type Metadata = Record<string, string>
