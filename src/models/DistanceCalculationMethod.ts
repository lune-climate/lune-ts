/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DistanceCalculationMethod =
    | {
          method: DistanceCalculationMethod.method
      }
    | {
          method: DistanceCalculationMethod.method
          factor: number
      }

export namespace DistanceCalculationMethod {
    export enum method {
        SEA_DISTANCE_ALGORITHM = 'sea_distance_algorithm',
        MAPBOX = 'mapbox',
        USER_INPUT = 'user_input',
        OSRM = 'osrm',
    }
}
