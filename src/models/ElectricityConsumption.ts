/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ElectricityConsumption = {
    amount: string
    /**
     * Unit, `kWh` for kilowatt-hours, `MWh` for megawatt-hours, `GWh` for gigawatt-hours
     */
    unit: ElectricityConsumption.unit
}

export namespace ElectricityConsumption {
    /**
     * Unit, `kWh` for kilowatt-hours, `MWh` for megawatt-hours, `GWh` for gigawatt-hours
     */
    export enum unit {
        K_WH = 'kWh',
        MWH = 'MWh',
        GWH = 'GWh',
    }
}
