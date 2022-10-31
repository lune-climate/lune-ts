/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Distance = {
    amount: string
    /**
     * Unit, `km` for kilometers, `mi` for miles
     */
    unit: Distance.unit
}

export namespace Distance {
    /**
     * Unit, `km` for kilometers, `mi` for miles
     */
    export enum unit {
        KM = 'km',
        MI = 'mi',
        NM = 'nm',
    }
}
