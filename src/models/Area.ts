/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Area = {
    amount: string
    unit: Area.unit
}

export namespace Area {
    export enum unit {
        SQUARE_METERS = 'square_meters',
        SQUARE_FEET = 'square_feet',
    }
}
