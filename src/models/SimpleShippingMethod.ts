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
export type SimpleShippingMethod =
    | 'inland_waterway_motor_vessel_small'
    | 'inland_waterway_motor_vessel_medium'
    | 'inland_waterway_motor_vessel_large'
    | 'inland_waterway_coupled_convoy'
    | 'inland_waterway_pushed_convoy_small'
    | 'inland_waterway_pushed_convoy_medium'
    | 'inland_waterway_pushed_convoy_large'
    | 'inland_waterway_tanker'
    | 'inland_waterway_container_vessel_medium'
    | 'inland_waterway_container_vessel_large'
    | 'inland_waterway_container_vessel_convoy'
    | 'diesel_freight_train'
    | 'electric_freight_train'
    | 'diesel_truck'
    | 'plane'
    | 'passenger_plane'
    | 'cargo_plane'
