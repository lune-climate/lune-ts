/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Mass = {
    amount: string
    /**
     * Unit, `t` for tonne, `kg` for kilogram
     */
    unit: Mass.unit
}

export namespace Mass {
    /**
     * Unit, `t` for tonne, `kg` for kilogram
     */
    export enum unit {
        KG = 'kg',
        T = 't',
    }
}
