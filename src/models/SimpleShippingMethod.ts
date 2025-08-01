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
 * Provide a single enum value to describe the transport method. For each transport method, enums follow a consistent pattern, as described below.
 *
 * Note: This input only applies for inland waterways, road, rail, and air transport. For sea transport, please use the Single property transport method (Sea only).
 *
 * # Inland waterways
 * For inland waterways, values follow the pattern:
 *
 * `inland_waterway_{vessel_type}_{size}`
 *
 * Only the `vessel_type` is required.
 *
 * The full list of available enums is provided below. The following section lists only those enums that include a size component, with each size mapped to its corresponding vessel dimensions.
 *
 * * `inland_waterway_motor_vessel_extra_small`: Under 50 m (650 t)
 * * `inland_waterway_motor_vessel_small`: 50–80 m (650–1000 t)
 * * `inland_waterway_motor_vessel_medium`: 85–110 m (1000–2000 t)
 * * `inland_waterway_motor_vessel_large`: 135 m (2000–3000 t)
 * * `inland_waterway_coupled_convoy`: 163–185 m
 * * `inland_waterway_pushed_convoy_small`: 2 barges
 * * `inland_waterway_pushed_convoy_medium`: 4–5 barges
 * * `inland_waterway_pushed_convoy_large`: 6 barges
 * * `inland_waterway_container_vessel_medium`: 110 m
 * * `inland_waterway_container_vessel_large`: 135 m
 *
 * # Road transport
 * For road transport, values follow the pattern:
 *
 * `truck_{vehicle_type}_{vehicle_size}_{fuel}_{load_characteristics}`
 *
 * Only the `vehicle_type` is required. If `vehicle_size`, `fuel`, or `load_characteristics` are omitted, they default to `generic`, `diesel`, and `average` respectively.
 *
 * To indicate a North American vehicle, use the prefix `truck_na` instead of `truck`.
 *
 * The full list of available enums is provided below. The following section includes only those enums that specify a vehicle size, with each size mapped to its corresponding Gross Vehicle Weight (GVW). In some cases, size is included directly in the property name (e.g., truck_rigid_7_5t).
 *
 * * `truck_generic_van`: Under 3.5 t GVW
 * * `truck_generic_urban`: 3.5-7.5 t GVW
 * * `truck_generic_mgv`: 7.5-20 t GVW
 * * `truck_generic_hgv`: More than 20 t GVW
 *
 * # Rail transport
 * For rail transport, values follow the pattern:
 *
 * `{train_type}_{region}_{load_characteristics}`
 *
 * Only `train_type` (either `diesel_freight_train` or electric_freight_train) is required.
 *
 * The region value is used to request either an EU or US emission factor. If omitted, an EU emission factor is used. When load characteristics are omitted, `average` is assumed.
 *
 * # Air transport
 * For air transport, Lune supports one of three values:
 *
 * * `cargo_plane`: Indicating a full freighter plane.
 * * `passenger_plane`: Indicating the plane only contains belly freight.
 * * `plane`: When the freight capacity of the plane is unknown. This value uses a weighted average of cargo and passenger planes.
 *
 */
export enum SimpleShippingMethod {
    INLAND_WATERWAY_MOTOR_VESSEL_EXTRA_SMALL = 'inland_waterway_motor_vessel_extra_small',
    INLAND_WATERWAY_MOTOR_VESSEL_SMALL = 'inland_waterway_motor_vessel_small',
    INLAND_WATERWAY_MOTOR_VESSEL_MEDIUM = 'inland_waterway_motor_vessel_medium',
    INLAND_WATERWAY_MOTOR_VESSEL_LARGE = 'inland_waterway_motor_vessel_large',
    INLAND_WATERWAY_COUPLED_CONVOY = 'inland_waterway_coupled_convoy',
    INLAND_WATERWAY_PUSHED_CONVOY_SMALL = 'inland_waterway_pushed_convoy_small',
    INLAND_WATERWAY_PUSHED_CONVOY_MEDIUM = 'inland_waterway_pushed_convoy_medium',
    INLAND_WATERWAY_PUSHED_CONVOY_LARGE = 'inland_waterway_pushed_convoy_large',
    INLAND_WATERWAY_TANKER = 'inland_waterway_tanker',
    INLAND_WATERWAY_CONTAINER_VESSEL_MEDIUM = 'inland_waterway_container_vessel_medium',
    INLAND_WATERWAY_CONTAINER_VESSEL_LARGE = 'inland_waterway_container_vessel_large',
    INLAND_WATERWAY_CONTAINER_VESSEL_CONVOY = 'inland_waterway_container_vessel_convoy',
    DIESEL_FREIGHT_TRAIN = 'diesel_freight_train',
    ELECTRIC_FREIGHT_TRAIN = 'electric_freight_train',
    RAIL = 'rail',
    DIESEL_FREIGHT_TRAIN_US_AVERAGE = 'diesel_freight_train_us_average',
    DIESEL_FREIGHT_TRAIN_EU_AVERAGE = 'diesel_freight_train_eu_average',
    DIESEL_FREIGHT_TRAIN_EU_CONTAINER = 'diesel_freight_train_eu_container',
    DIESEL_FREIGHT_TRAIN_EU_CARS = 'diesel_freight_train_eu_cars',
    DIESEL_FREIGHT_TRAIN_EU_CHEMICALS = 'diesel_freight_train_eu_chemicals',
    DIESEL_FREIGHT_TRAIN_EU_COAL_STEEL = 'diesel_freight_train_eu_coal_steel',
    DIESEL_FREIGHT_TRAIN_EU_BUILDING_MATERIALS = 'diesel_freight_train_eu_building_materials',
    DIESEL_FREIGHT_TRAIN_EU_MANUFACTURED_PRODUCTS = 'diesel_freight_train_eu_manufactured_products',
    DIESEL_FREIGHT_TRAIN_EU_CEREALS = 'diesel_freight_train_eu_cereals',
    DIESEL_FREIGHT_TRAIN_EU_TRUCK_AND_TRAILER = 'diesel_freight_train_eu_truck_and_trailer',
    DIESEL_FREIGHT_TRAIN_EU_TRAILER_ONLY = 'diesel_freight_train_eu_trailer_only',
    ELECTRIC_FREIGHT_TRAIN_EU_AVERAGE = 'electric_freight_train_eu_average',
    ELECTRIC_FREIGHT_TRAIN_EU_CONTAINER = 'electric_freight_train_eu_container',
    ELECTRIC_FREIGHT_TRAIN_EU_CARS = 'electric_freight_train_eu_cars',
    ELECTRIC_FREIGHT_TRAIN_EU_CHEMICALS = 'electric_freight_train_eu_chemicals',
    ELECTRIC_FREIGHT_TRAIN_EU_COAL_STEEL = 'electric_freight_train_eu_coal_steel',
    ELECTRIC_FREIGHT_TRAIN_EU_BUILDING_MATERIALS = 'electric_freight_train_eu_building_materials',
    ELECTRIC_FREIGHT_TRAIN_EU_MANUFACTURED_PRODUCTS = 'electric_freight_train_eu_manufactured_products',
    ELECTRIC_FREIGHT_TRAIN_EU_CEREALS = 'electric_freight_train_eu_cereals',
    ELECTRIC_FREIGHT_TRAIN_EU_TRUCK_AND_TRAILER = 'electric_freight_train_eu_truck_and_trailer',
    ELECTRIC_FREIGHT_TRAIN_EU_TRAILER_ONLY = 'electric_freight_train_eu_trailer_only',
    DIESEL_TRUCK = 'diesel_truck',
    DIESEL_TRUCK_REFRIGERATED = 'diesel_truck_refrigerated',
    TRUCK_GENERIC_VAN = 'truck_generic_van',
    TRUCK_GENERIC_URBAN = 'truck_generic_urban',
    TRUCK_GENERIC_MGV = 'truck_generic_mgv',
    TRUCK_GENERIC_HGV = 'truck_generic_hgv',
    TRUCK_RIGID_7_5T = 'truck_rigid_7_5t',
    TRUCK_RIGID_12T = 'truck_rigid_12t',
    TRUCK_RIGID_20T = 'truck_rigid_20t',
    TRUCK_RIGID_26T = 'truck_rigid_26t',
    TRUCK_RIGID_32T = 'truck_rigid_32t',
    TRUCK_ARTICULATED_34T = 'truck_articulated_34t',
    TRUCK_ARTICULATED_40T = 'truck_articulated_40t',
    TRUCK_ARTICULATED_44T = 'truck_articulated_44t',
    TRUCK_ARTICULATED_60T = 'truck_articulated_60t',
    TRUCK_ARTICULATED_72T = 'truck_articulated_72t',
    TRUCK_GENERIC_VAN_PETROL = 'truck_generic_van_petrol',
    TRUCK_GENERIC_VAN_CNG = 'truck_generic_van_cng',
    TRUCK_GENERIC_VAN_LPG = 'truck_generic_van_lpg',
    TRUCK_RIGID_7_5T_CNG = 'truck_rigid_7_5t_cng',
    TRUCK_RIGID_12T_CNG = 'truck_rigid_12t_cng',
    TRUCK_RIGID_20T_CNG = 'truck_rigid_20t_cng',
    TRUCK_RIGID_26T_CNG = 'truck_rigid_26t_cng',
    TRUCK_RIGID_26T_LNG = 'truck_rigid_26t_lng',
    TRUCK_ARTICULATED_44T_LIGHT_LOAD = 'truck_articulated_44t_light_load',
    TRUCK_ARTICULATED_44T_HEAVY_LOAD = 'truck_articulated_44t_heavy_load',
    TRUCK_ARTICULATED_44T_CONTAINER = 'truck_articulated_44t_container',
    TRUCK_ARTICULATED_60T_HEAVY_LOAD = 'truck_articulated_60t_heavy_load',
    TRUCK_ARTICULATED_60T_CONTAINER = 'truck_articulated_60t_container',
    TRUCK_ARTICULATED_72T_HEAVY_LOAD = 'truck_articulated_72t_heavy_load',
    TRUCK_ARTICULATED_72T_CONTAINER = 'truck_articulated_72t_container',
    TRUCK_ARTICULATED_40T_SI_ENGINE_LNG_CONTAINER = 'truck_articulated_40t_si_engine_lng_container',
    TRUCK_ARTICULATED_40T_SI_ENGINE_CNG = 'truck_articulated_40t_si_engine_cng',
    TRUCK_ARTICULATED_40T_SI_ENGINE_BIO_LNG = 'truck_articulated_40t_si_engine_bio_lng',
    TRUCK_ARTICULATED_40T_SI_ENGINE_CNG_CONTAINER = 'truck_articulated_40t_si_engine_cng_container',
    TRUCK_ARTICULATED_40T_SI_ENGINE_BIO_LNG_CONTAINER = 'truck_articulated_40t_si_engine_bio_lng_container',
    TRUCK_ARTICULATED_40T_HPDI_LNG_DIESEL = 'truck_articulated_40t_hpdi_lng_diesel',
    TRUCK_ARTICULATED_40T_HPDI_CNG_DIESEL = 'truck_articulated_40t_hpdi_cng_diesel',
    TRUCK_ARTICULATED_40T_HPDI_BIO_LNG_DIESEL = 'truck_articulated_40t_hpdi_bio_lng_diesel',
    TRUCK_GENERIC_VAN_ELECTRIC = 'truck_generic_van_electric',
    TRUCK_RIGID_7_5T_ELECTRIC = 'truck_rigid_7_5t_electric',
    TRUCK_RIGID_7_5T_ELECTRIC_LIGHT_LOAD = 'truck_rigid_7_5t_electric_light_load',
    TRUCK_RIGID_12T_ELECTRIC = 'truck_rigid_12t_electric',
    TRUCK_RIGID_12T_ELECTRIC_LIGHT_LOAD = 'truck_rigid_12t_electric_light_load',
    TRUCK_RIGID_20T_ELECTRIC = 'truck_rigid_20t_electric',
    TRUCK_RIGID_20T_ELECTRIC_LIGHT_LOAD = 'truck_rigid_20t_electric_light_load',
    TRUCK_RIGID_40T_ELECTRIC = 'truck_rigid_40t_electric',
    TRUCK_RIGID_40T_ELECTRIC_LIGHT_LOAD = 'truck_rigid_40t_electric_light_load',
    TRUCK_GENERIC_VAN_REFRIGERATED = 'truck_generic_van_refrigerated',
    TRUCK_GENERIC_URBAN_REFRIGERATED = 'truck_generic_urban_refrigerated',
    TRUCK_GENERIC_MGV_REFRIGERATED = 'truck_generic_mgv_refrigerated',
    TRUCK_GENERIC_HGV_REFRIGERATED = 'truck_generic_hgv_refrigerated',
    TRUCK_RIGID_7_5T_REFRIGERATED = 'truck_rigid_7_5t_refrigerated',
    TRUCK_RIGID_12T_REFRIGERATED = 'truck_rigid_12t_refrigerated',
    TRUCK_RIGID_20T_REFRIGERATED = 'truck_rigid_20t_refrigerated',
    TRUCK_RIGID_26T_REFRIGERATED = 'truck_rigid_26t_refrigerated',
    TRUCK_RIGID_32T_REFRIGERATED = 'truck_rigid_32t_refrigerated',
    TRUCK_ARTICULATED_34T_REFRIGERATED = 'truck_articulated_34t_refrigerated',
    TRUCK_ARTICULATED_40T_REFRIGERATED = 'truck_articulated_40t_refrigerated',
    TRUCK_ARTICULATED_44T_REFRIGERATED = 'truck_articulated_44t_refrigerated',
    TRUCK_ARTICULATED_60T_REFRIGERATED = 'truck_articulated_60t_refrigerated',
    TRUCK_ARTICULATED_72T_REFRIGERATED = 'truck_articulated_72t_refrigerated',
    TRUCK_GENERIC_VAN_PETROL_REFRIGERATED = 'truck_generic_van_petrol_refrigerated',
    TRUCK_GENERIC_VAN_CNG_REFRIGERATED = 'truck_generic_van_cng_refrigerated',
    TRUCK_GENERIC_VAN_LPG_REFRIGERATED = 'truck_generic_van_lpg_refrigerated',
    TRUCK_RIGID_7_5T_CNG_REFRIGERATED = 'truck_rigid_7_5t_cng_refrigerated',
    TRUCK_RIGID_12T_CNG_REFRIGERATED = 'truck_rigid_12t_cng_refrigerated',
    TRUCK_RIGID_20T_CNG_REFRIGERATED = 'truck_rigid_20t_cng_refrigerated',
    TRUCK_RIGID_26T_CNG_REFRIGERATED = 'truck_rigid_26t_cng_refrigerated',
    TRUCK_RIGID_26T_LNG_REFRIGERATED = 'truck_rigid_26t_lng_refrigerated',
    TRUCK_ARTICULATED_44T_LIGHT_LOAD_REFRIGERATED = 'truck_articulated_44t_light_load_refrigerated',
    TRUCK_ARTICULATED_44T_HEAVY_LOAD_REFRIGERATED = 'truck_articulated_44t_heavy_load_refrigerated',
    TRUCK_ARTICULATED_44T_CONTAINER_REFRIGERATED = 'truck_articulated_44t_container_refrigerated',
    TRUCK_ARTICULATED_60T_HEAVY_LOAD_REFRIGERATED = 'truck_articulated_60t_heavy_load_refrigerated',
    TRUCK_ARTICULATED_60T_CONTAINER_REFRIGERATED = 'truck_articulated_60t_container_refrigerated',
    TRUCK_ARTICULATED_72T_HEAVY_LOAD_REFRIGERATED = 'truck_articulated_72t_heavy_load_refrigerated',
    TRUCK_ARTICULATED_72T_CONTAINER_REFRIGERATED = 'truck_articulated_72t_container_refrigerated',
    TRUCK_ARTICULATED_40T_SI_ENGINE_LNG_CONTAINER_REFRIGERATED = 'truck_articulated_40t_si_engine_lng_container_refrigerated',
    TRUCK_ARTICULATED_40T_SI_ENGINE_CNG_REFRIGERATED = 'truck_articulated_40t_si_engine_cng_refrigerated',
    TRUCK_ARTICULATED_40T_SI_ENGINE_BIO_LNG_REFRIGERATED = 'truck_articulated_40t_si_engine_bio_lng_refrigerated',
    TRUCK_ARTICULATED_40T_SI_ENGINE_CNG_CONTAINER_REFRIGERATED = 'truck_articulated_40t_si_engine_cng_container_refrigerated',
    TRUCK_ARTICULATED_40T_SI_ENGINE_BIO_LNG_CONTAINER_REFRIGERATED = 'truck_articulated_40t_si_engine_bio_lng_container_refrigerated',
    TRUCK_ARTICULATED_40T_HPDI_LNG_DIESEL_REFRIGERATED = 'truck_articulated_40t_hpdi_lng_diesel_refrigerated',
    TRUCK_ARTICULATED_40T_HPDI_CNG_DIESEL_REFRIGERATED = 'truck_articulated_40t_hpdi_cng_diesel_refrigerated',
    TRUCK_ARTICULATED_40T_HPDI_BIO_LNG_DIESEL_REFRIGERATED = 'truck_articulated_40t_hpdi_bio_lng_diesel_refrigerated',
    TRUCK_GENERIC_VAN_ELECTRIC_REFRIGERATED = 'truck_generic_van_electric_refrigerated',
    TRUCK_RIGID_7_5T_ELECTRIC_REFRIGERATED = 'truck_rigid_7_5t_electric_refrigerated',
    TRUCK_RIGID_7_5T_ELECTRIC_LIGHT_LOAD_REFRIGERATED = 'truck_rigid_7_5t_electric_light_load_refrigerated',
    TRUCK_RIGID_12T_ELECTRIC_REFRIGERATED = 'truck_rigid_12t_electric_refrigerated',
    TRUCK_RIGID_12T_ELECTRIC_LIGHT_LOAD_REFRIGERATED = 'truck_rigid_12t_electric_light_load_refrigerated',
    TRUCK_RIGID_20T_ELECTRIC_REFRIGERATED = 'truck_rigid_20t_electric_refrigerated',
    TRUCK_RIGID_20T_ELECTRIC_LIGHT_LOAD_REFRIGERATED = 'truck_rigid_20t_electric_light_load_refrigerated',
    TRUCK_RIGID_40T_ELECTRIC_REFRIGERATED = 'truck_rigid_40t_electric_refrigerated',
    TRUCK_RIGID_40T_ELECTRIC_LIGHT_LOAD_REFRIGERATED = 'truck_rigid_40t_electric_light_load_refrigerated',
    TRUCK_NA_VAN = 'truck_na_van',
    TRUCK_NA_GENERAL = 'truck_na_general',
    TRUCK_NA_AUTO_CARRIER = 'truck_na_auto_carrier',
    TRUCK_NA_DRAY = 'truck_na_dray',
    TRUCK_NA_EXPEDITED = 'truck_na_expedited',
    TRUCK_NA_FLATBED = 'truck_na_flatbed',
    TRUCK_NA_HEAVY_BULK = 'truck_na_heavy_bulk',
    TRUCK_NA_DRY_VAN_LTL = 'truck_na_dry_van_ltl',
    TRUCK_NA_DRY_VAN_TL = 'truck_na_dry_van_tl',
    TRUCK_NA_MIXED = 'truck_na_mixed',
    TRUCK_NA_MOVING = 'truck_na_moving',
    TRUCK_NA_PACKAGE = 'truck_na_package',
    TRUCK_NA_REFRIGERATED = 'truck_na_refrigerated',
    TRUCK_NA_SPECIALIZED = 'truck_na_specialized',
    TRUCK_NA_TANKER = 'truck_na_tanker',
    PLANE = 'plane',
    PASSENGER_PLANE = 'passenger_plane',
    CARGO_PLANE = 'cargo_plane',
}
