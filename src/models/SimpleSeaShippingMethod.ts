// =========================================================================================
//
// This file is AUTO-GENERATED by https://github.com/lune-climate/openapi-typescript-codegen
//
// In most cases you DON'T WANT TO MAKE MANUAL CHANGES to it – they WILL BE OVERWRITTEN.
//
// =========================================================================================

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ## Deadweight tonnage
 *
 * `dwkt` suffixes describe the ship's deadweight kilotonne upper bound, whereas `over_Xdwkt` suffixes describe lower bounds.
 *
 * ## Fuels
 *
 * Suffixes such as `_hfo` (Heavy fuel oil), `_vlsfo` (Very Low Sulphur Fuel Oil), `_mdo` (Marine diesel oil) describe the ship's fuel.
 *
 */
export enum SimpleSeaShippingMethod {
    SEA_BULK_CARRIER_10DWKT_HFO = 'sea_bulk_carrier_10dwkt_hfo',
    SEA_BULK_CARRIER_10DWKT_VLSFO = 'sea_bulk_carrier_10dwkt_vlsfo',
    SEA_BULK_CARRIER_10DWKT_MDO = 'sea_bulk_carrier_10dwkt_mdo',
    SEA_BULK_CARRIER_35DWKT_HFO = 'sea_bulk_carrier_35dwkt_hfo',
    SEA_BULK_CARRIER_35DWKT_VLSFO = 'sea_bulk_carrier_35dwkt_vlsfo',
    SEA_BULK_CARRIER_35DWKT_MDO = 'sea_bulk_carrier_35dwkt_mdo',
    SEA_BULK_CARRIER_60DWKT_HFO = 'sea_bulk_carrier_60dwkt_hfo',
    SEA_BULK_CARRIER_60DWKT_VLSFO = 'sea_bulk_carrier_60dwkt_vlsfo',
    SEA_BULK_CARRIER_60DWKT_MDO = 'sea_bulk_carrier_60dwkt_mdo',
    SEA_BULK_CARRIER_100DWKT_HFO = 'sea_bulk_carrier_100dwkt_hfo',
    SEA_BULK_CARRIER_100DWKT_VLSFO = 'sea_bulk_carrier_100dwkt_vlsfo',
    SEA_BULK_CARRIER_100DWKT_MDO = 'sea_bulk_carrier_100dwkt_mdo',
    SEA_BULK_CARRIER_200DWKT_HFO = 'sea_bulk_carrier_200dwkt_hfo',
    SEA_BULK_CARRIER_200DWKT_VLSFO = 'sea_bulk_carrier_200dwkt_vlsfo',
    SEA_BULK_CARRIER_200DWKT_MDO = 'sea_bulk_carrier_200dwkt_mdo',
    SEA_BULK_CARRIER_OVER_200DWKT_HFO = 'sea_bulk_carrier_over_200dwkt_hfo',
    SEA_BULK_CARRIER_OVER_200DWKT_VLSFO = 'sea_bulk_carrier_over_200dwkt_vlsfo',
    SEA_BULK_CARRIER_OVER_200DWKT_MDO = 'sea_bulk_carrier_over_200dwkt_mdo',
    SEA_CHEMICAL_TANKER_5DWKT_HFO = 'sea_chemical_tanker_5dwkt_hfo',
    SEA_CHEMICAL_TANKER_5DWKT_VLSFO = 'sea_chemical_tanker_5dwkt_vlsfo',
    SEA_CHEMICAL_TANKER_5DWKT_MDO = 'sea_chemical_tanker_5dwkt_mdo',
    SEA_CHEMICAL_TANKER_10DWKT_HFO = 'sea_chemical_tanker_10dwkt_hfo',
    SEA_CHEMICAL_TANKER_10DWKT_VLSFO = 'sea_chemical_tanker_10dwkt_vlsfo',
    SEA_CHEMICAL_TANKER_10DWKT_MDO = 'sea_chemical_tanker_10dwkt_mdo',
    SEA_CHEMICAL_TANKER_20DWKT_HFO = 'sea_chemical_tanker_20dwkt_hfo',
    SEA_CHEMICAL_TANKER_20DWKT_VLSFO = 'sea_chemical_tanker_20dwkt_vlsfo',
    SEA_CHEMICAL_TANKER_20DWKT_MDO = 'sea_chemical_tanker_20dwkt_mdo',
    SEA_CHEMICAL_TANKER_40DWKT_HFO = 'sea_chemical_tanker_40dwkt_hfo',
    SEA_CHEMICAL_TANKER_40DWKT_VLSFO = 'sea_chemical_tanker_40dwkt_vlsfo',
    SEA_CHEMICAL_TANKER_40DWKT_MDO = 'sea_chemical_tanker_40dwkt_mdo',
    SEA_CHEMICAL_TANKER_OVER_40DWKT_HFO = 'sea_chemical_tanker_over_40dwkt_hfo',
    SEA_CHEMICAL_TANKER_OVER_40DWKT_VLSFO = 'sea_chemical_tanker_over_40dwkt_vlsfo',
    SEA_CHEMICAL_TANKER_OVER_40DWKT_MDO = 'sea_chemical_tanker_over_40dwkt_mdo',
    SEA_GENERAL_CARGO_5DWKT_HFO = 'sea_general_cargo_5dwkt_hfo',
    SEA_GENERAL_CARGO_5DWKT_VLSFO = 'sea_general_cargo_5dwkt_vlsfo',
    SEA_GENERAL_CARGO_5DWKT_MDO = 'sea_general_cargo_5dwkt_mdo',
    SEA_GENERAL_CARGO_10DWKT_HFO = 'sea_general_cargo_10dwkt_hfo',
    SEA_GENERAL_CARGO_10DWKT_VLSFO = 'sea_general_cargo_10dwkt_vlsfo',
    SEA_GENERAL_CARGO_10DWKT_MDO = 'sea_general_cargo_10dwkt_mdo',
    SEA_GENERAL_CARGO_20DWKT_HFO = 'sea_general_cargo_20dwkt_hfo',
    SEA_GENERAL_CARGO_20DWKT_VLSFO = 'sea_general_cargo_20dwkt_vlsfo',
    SEA_GENERAL_CARGO_20DWKT_MDO = 'sea_general_cargo_20dwkt_mdo',
    SEA_GENERAL_CARGO_OVER_20DWKT_HFO = 'sea_general_cargo_over_20dwkt_hfo',
    SEA_GENERAL_CARGO_OVER_20DWKT_VLSFO = 'sea_general_cargo_over_20dwkt_vlsfo',
    SEA_GENERAL_CARGO_OVER_20DWKT_MDO = 'sea_general_cargo_over_20dwkt_mdo',
    SEA_LIQUEFIED_GAS_TANKER_50DWKT_HFO = 'sea_liquefied_gas_tanker_50dwkt_hfo',
    SEA_LIQUEFIED_GAS_TANKER_50DWKT_VLSFO = 'sea_liquefied_gas_tanker_50dwkt_vlsfo',
    SEA_LIQUEFIED_GAS_TANKER_50DWKT_MDO = 'sea_liquefied_gas_tanker_50dwkt_mdo',
    SEA_LIQUEFIED_GAS_TANKER_100DWKT_HFO = 'sea_liquefied_gas_tanker_100dwkt_hfo',
    SEA_LIQUEFIED_GAS_TANKER_100DWKT_VLSFO = 'sea_liquefied_gas_tanker_100dwkt_vlsfo',
    SEA_LIQUEFIED_GAS_TANKER_100DWKT_MDO = 'sea_liquefied_gas_tanker_100dwkt_mdo',
    SEA_LIQUEFIED_GAS_TANKER_200DWKT_HFO = 'sea_liquefied_gas_tanker_200dwkt_hfo',
    SEA_LIQUEFIED_GAS_TANKER_200DWKT_VLSFO = 'sea_liquefied_gas_tanker_200dwkt_vlsfo',
    SEA_LIQUEFIED_GAS_TANKER_200DWKT_MDO = 'sea_liquefied_gas_tanker_200dwkt_mdo',
    SEA_LIQUEFIED_GAS_TANKER_OVER_200DWKT_HFO = 'sea_liquefied_gas_tanker_over_200dwkt_hfo',
    SEA_LIQUEFIED_GAS_TANKER_OVER_200DWKT_VLSFO = 'sea_liquefied_gas_tanker_over_200dwkt_vlsfo',
    SEA_LIQUEFIED_GAS_TANKER_OVER_200DWKT_MDO = 'sea_liquefied_gas_tanker_over_200dwkt_mdo',
    SEA_OIL_TANKER_5DWKT_HFO = 'sea_oil_tanker_5dwkt_hfo',
    SEA_OIL_TANKER_5DWKT_VLSFO = 'sea_oil_tanker_5dwkt_vlsfo',
    SEA_OIL_TANKER_5DWKT_MDO = 'sea_oil_tanker_5dwkt_mdo',
    SEA_OIL_TANKER_10DWKT_HFO = 'sea_oil_tanker_10dwkt_hfo',
    SEA_OIL_TANKER_10DWKT_VLSFO = 'sea_oil_tanker_10dwkt_vlsfo',
    SEA_OIL_TANKER_10DWKT_MDO = 'sea_oil_tanker_10dwkt_mdo',
    SEA_OIL_TANKER_20DWKT_HFO = 'sea_oil_tanker_20dwkt_hfo',
    SEA_OIL_TANKER_20DWKT_VLSFO = 'sea_oil_tanker_20dwkt_vlsfo',
    SEA_OIL_TANKER_20DWKT_MDO = 'sea_oil_tanker_20dwkt_mdo',
    SEA_OIL_TANKER_60DWKT_HFO = 'sea_oil_tanker_60dwkt_hfo',
    SEA_OIL_TANKER_60DWKT_VLSFO = 'sea_oil_tanker_60dwkt_vlsfo',
    SEA_OIL_TANKER_60DWKT_MDO = 'sea_oil_tanker_60dwkt_mdo',
    SEA_OIL_TANKER_80DWKT_HFO = 'sea_oil_tanker_80dwkt_hfo',
    SEA_OIL_TANKER_80DWKT_VLSFO = 'sea_oil_tanker_80dwkt_vlsfo',
    SEA_OIL_TANKER_80DWKT_MDO = 'sea_oil_tanker_80dwkt_mdo',
    SEA_OIL_TANKER_112DWKT_HFO = 'sea_oil_tanker_112dwkt_hfo',
    SEA_OIL_TANKER_112DWKT_VLSFO = 'sea_oil_tanker_112dwkt_vlsfo',
    SEA_OIL_TANKER_112DWKT_MDO = 'sea_oil_tanker_112dwkt_mdo',
    SEA_OIL_TANKER_200DWKT_HFO = 'sea_oil_tanker_200dwkt_hfo',
    SEA_OIL_TANKER_200DWKT_VLSFO = 'sea_oil_tanker_200dwkt_vlsfo',
    SEA_OIL_TANKER_200DWKT_MDO = 'sea_oil_tanker_200dwkt_mdo',
    SEA_OIL_TANKER_OVER_200DWKT_HFO = 'sea_oil_tanker_over_200dwkt_hfo',
    SEA_OIL_TANKER_OVER_200DWKT_VLSFO = 'sea_oil_tanker_over_200dwkt_vlsfo',
    SEA_OIL_TANKER_OVER_200DWKT_MDO = 'sea_oil_tanker_over_200dwkt_mdo',
    SEA_OTHER_LIQUIDS_TANKER_1DWKT_HFO = 'sea_other_liquids_tanker_1dwkt_hfo',
    SEA_OTHER_LIQUIDS_TANKER_1DWKT_VLSFO = 'sea_other_liquids_tanker_1dwkt_vlsfo',
    SEA_OTHER_LIQUIDS_TANKER_1DWKT_MDO = 'sea_other_liquids_tanker_1dwkt_mdo',
    SEA_OTHER_LIQUIDS_TANKER_OVER_1DWKT_HFO = 'sea_other_liquids_tanker_over_1dwkt_hfo',
    SEA_OTHER_LIQUIDS_TANKER_OVER_1DWKT_VLSFO = 'sea_other_liquids_tanker_over_1dwkt_vlsfo',
    SEA_OTHER_LIQUIDS_TANKER_OVER_1DWKT_MDO = 'sea_other_liquids_tanker_over_1dwkt_mdo',
    SEA_ROPAX_2DWKT_HFO = 'sea_ropax_2dwkt_hfo',
    SEA_ROPAX_2DWKT_VLSFO = 'sea_ropax_2dwkt_vlsfo',
    SEA_ROPAX_2DWKT_MDO = 'sea_ropax_2dwkt_mdo',
    SEA_ROPAX_5DWKT_HFO = 'sea_ropax_5dwkt_hfo',
    SEA_ROPAX_5DWKT_VLSFO = 'sea_ropax_5dwkt_vlsfo',
    SEA_ROPAX_5DWKT_MDO = 'sea_ropax_5dwkt_mdo',
    SEA_ROPAX_10DWKT_HFO = 'sea_ropax_10dwkt_hfo',
    SEA_ROPAX_10DWKT_VLSFO = 'sea_ropax_10dwkt_vlsfo',
    SEA_ROPAX_10DWKT_MDO = 'sea_ropax_10dwkt_mdo',
    SEA_ROPAX_20DWKT_HFO = 'sea_ropax_20dwkt_hfo',
    SEA_ROPAX_20DWKT_VLSFO = 'sea_ropax_20dwkt_vlsfo',
    SEA_ROPAX_20DWKT_MDO = 'sea_ropax_20dwkt_mdo',
    SEA_ROPAX_OVER_20DWKT_HFO = 'sea_ropax_over_20dwkt_hfo',
    SEA_ROPAX_OVER_20DWKT_VLSFO = 'sea_ropax_over_20dwkt_vlsfo',
    SEA_ROPAX_OVER_20DWKT_MDO = 'sea_ropax_over_20dwkt_mdo',
    SEA_REFRIGERATED_BULK_CARRIER_2DWKT_HFO = 'sea_refrigerated_bulk_carrier_2dwkt_hfo',
    SEA_REFRIGERATED_BULK_CARRIER_2DWKT_VLSFO = 'sea_refrigerated_bulk_carrier_2dwkt_vlsfo',
    SEA_REFRIGERATED_BULK_CARRIER_2DWKT_MDO = 'sea_refrigerated_bulk_carrier_2dwkt_mdo',
    SEA_REFRIGERATED_BULK_CARRIER_6DWKT_HFO = 'sea_refrigerated_bulk_carrier_6dwkt_hfo',
    SEA_REFRIGERATED_BULK_CARRIER_6DWKT_VLSFO = 'sea_refrigerated_bulk_carrier_6dwkt_vlsfo',
    SEA_REFRIGERATED_BULK_CARRIER_6DWKT_MDO = 'sea_refrigerated_bulk_carrier_6dwkt_mdo',
    SEA_REFRIGERATED_BULK_CARRIER_10DWKT_HFO = 'sea_refrigerated_bulk_carrier_10dwkt_hfo',
    SEA_REFRIGERATED_BULK_CARRIER_10DWKT_VLSFO = 'sea_refrigerated_bulk_carrier_10dwkt_vlsfo',
    SEA_REFRIGERATED_BULK_CARRIER_10DWKT_MDO = 'sea_refrigerated_bulk_carrier_10dwkt_mdo',
    SEA_REFRIGERATED_BULK_CARRIER_OVER_10DWKT_HFO = 'sea_refrigerated_bulk_carrier_over_10dwkt_hfo',
    SEA_REFRIGERATED_BULK_CARRIER_OVER_10DWKT_VLSFO = 'sea_refrigerated_bulk_carrier_over_10dwkt_vlsfo',
    SEA_REFRIGERATED_BULK_CARRIER_OVER_10DWKT_MDO = 'sea_refrigerated_bulk_carrier_over_10dwkt_mdo',
    SEA_RORO_5DWKT_HFO = 'sea_roro_5dwkt_hfo',
    SEA_RORO_5DWKT_VLSFO = 'sea_roro_5dwkt_vlsfo',
    SEA_RORO_5DWKT_MDO = 'sea_roro_5dwkt_mdo',
    SEA_RORO_10DWKT_HFO = 'sea_roro_10dwkt_hfo',
    SEA_RORO_10DWKT_VLSFO = 'sea_roro_10dwkt_vlsfo',
    SEA_RORO_10DWKT_MDO = 'sea_roro_10dwkt_mdo',
    SEA_RORO_15DWKT_HFO = 'sea_roro_15dwkt_hfo',
    SEA_RORO_15DWKT_VLSFO = 'sea_roro_15dwkt_vlsfo',
    SEA_RORO_15DWKT_MDO = 'sea_roro_15dwkt_mdo',
    SEA_RORO_OVER_15DWKT_HFO = 'sea_roro_over_15dwkt_hfo',
    SEA_RORO_OVER_15DWKT_VLSFO = 'sea_roro_over_15dwkt_vlsfo',
    SEA_RORO_OVER_15DWKT_MDO = 'sea_roro_over_15dwkt_mdo',
    SEA_VEHICLE_CARRIER_30DWKT_HFO = 'sea_vehicle_carrier_30dwkt_hfo',
    SEA_VEHICLE_CARRIER_30DWKT_VLSFO = 'sea_vehicle_carrier_30dwkt_vlsfo',
    SEA_VEHICLE_CARRIER_30DWKT_MDO = 'sea_vehicle_carrier_30dwkt_mdo',
    SEA_VEHICLE_CARRIER_50DWKT_HFO = 'sea_vehicle_carrier_50dwkt_hfo',
    SEA_VEHICLE_CARRIER_50DWKT_VLSFO = 'sea_vehicle_carrier_50dwkt_vlsfo',
    SEA_VEHICLE_CARRIER_50DWKT_MDO = 'sea_vehicle_carrier_50dwkt_mdo',
    SEA_VEHICLE_CARRIER_OVER_50DWKT_HFO = 'sea_vehicle_carrier_over_50dwkt_hfo',
    SEA_VEHICLE_CARRIER_OVER_50DWKT_VLSFO = 'sea_vehicle_carrier_over_50dwkt_vlsfo',
    SEA_VEHICLE_CARRIER_OVER_50DWKT_MDO = 'sea_vehicle_carrier_over_50dwkt_mdo',
}
