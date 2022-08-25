/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Vessel sizes:
 * * `inland_waterway_motor_vessel_*`:
 *
 * * `small` – less than 80 m / 1000 t
 * * `medium` – 85-110 m (1000-2000 t)
 * * `large` – 135 m (2000-3000 t)
 *
 * * `inland_waterway_coupled_convoy` – 163-185 m
 * * `inland_waterway_pushed_convoy_*`:
 *
 * * `small` – 2 barges
 * * `medium` – 4-5 barges
 * * `large` – 6 barges
 *
 * * `inland_waterway_container_vessel_medium` – 110 m
 * * `inland_waterway_container_vessel_large` – 135 m
 *
 * # Road transport
 *
 * As far as road transport is concerned we support a variety of trucks (the `truck_*`
 * methods). Our emission estimates assume diesel fuel and average load characteristics
 * at the moment, unless a specific type says otherwise.
 *
 * ## Regional differences
 *
 * Truck types in North America and the rest of the world are categorized differently,
 * therefore they're available here as distinct shipping methods. The North America
 * trucks are prefixed with `truck_na_` while for the rest of the world it's just `truck_`.
 *
 * ## Truck sizes
 *
 * * Vans (`truck_generic_van`, `truck_na_van`) are under 3.5 tonnes GVW (Gross Vehicle Weight).
 * * `truck_generic_urban` is between 3.5 and 7.5 tonnes GVW
 * * `truck_generic_mgv` is betwen 7.5 and 20 tonnes
 * * `truck_generic_hgv` is above 20 tonnes GVW
 *
 * For other truck types the GVW is either in the method name (like `truck_rigid_7_5t` which is
 * up to 7.5 tonnes) or is not specified.
 *
 * ## Choosing the right truck type
 *
 * The are significant differences in emissions of different truck types. The more precisely
 * you can declare what kind of truck you use, the better.
 *
 * If you only know a rough size of the truck you'll do well can choose one of the
 * `truck_generic_*` types if outside North America.
 *
 */
export enum SimpleShippingMethod {
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
    DIESEL_TRUCK = 'diesel_truck',
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
