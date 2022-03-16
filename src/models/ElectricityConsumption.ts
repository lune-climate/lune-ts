/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ElectricityConsumption = {
    amount: string
    /**
     * Unit, `kWh` for kilowatt-hours, `MWh` for megawatt-hours, `GWh` for gigawatt-hours
     */
    unit: 'kWh' | 'MWh' | 'GWh'
}
