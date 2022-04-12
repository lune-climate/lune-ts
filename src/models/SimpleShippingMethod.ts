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
    PLANE = 'plane',
    PASSENGER_PLANE = 'passenger_plane',
    CARGO_PLANE = 'cargo_plane',
}
