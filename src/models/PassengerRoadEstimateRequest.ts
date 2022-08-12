/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Distance } from './Distance'
import type { SourceDestination } from './SourceDestination'

/**
 * Parameters for estimating emissions for passenger vehicle
 */
export type PassengerRoadEstimateRequest = {
    /**
     * Either the flight distance or the start/destination address or source and destination
     */
    route: Distance | SourceDestination
    /**
     * car_mini: smallest category of car sometimes referred to as a city car. Examples include: Citroën C1, Fiat/Alfa Romeo 500 and Panda, Peugeot 107, Volkswagen up!, Renault TWINGO, Toyota AYGO, smart fortwo and Hyundai i 10.
     * car_supermini: car that is larger than a city car, but smaller than a small family car. Examples include: Ford Fiesta, Renault CLIO, Volkswagen Polo, Citroën C2 and C3, Opel Corsa, Peugeot 208, and Toyota Yaris.
     * car_lower_medium: small, compact family car. Examples include: Volkswagen Golf, Ford Focus, Opel Astra, Audi A3, BMW 1 Series, Renault Mégane and Toyota Auris.
     * car_upper_medium: classed as a large family car. Examples include: BMW 3 Series, ŠKODA Octavia, Volkswagen Passat, Audi A4, Mercedes Benz C Class and Peugeot 508.
     * car_executive: large cars. Examples include: BMW 5 Series, Audi A5 and A6, Mercedes Benz E Class and Skoda Superb.
     * car_luxury: luxury car which is niche in the European market. Examples include: Jaguar XF, Mercedes-Benz S-Class, .BMW 7 series, Audi A8, Porsche Panamera and Lexus LS.
     * car_sports: sport cars are a small, usually two seater with two doors and designed for speed, high acceleration, and manoeuvrability. Examples include: Mercedes-Benz SLK, Audi TT, Porsche 911 and Boxster, and Peugeot RCZ.
     * car_dual_purpose_4x4: sport utility vehicles (SUVs) which have off-road capabilities and four-wheel drive. Examples include: Suzuki Jimny, Land Rover Discovery and Defender, Toyota Land Cruiser, and Nissan Pathfinder.
     * car_mpv: multipurpose cars. Examples include: Ford C-Max, Renault Scenic, Volkswagen Touran, Opel Zafira, Ford B-Max, and Citroën C3 Picasso and C4 Picasso.
     * motorcycle_small: mopeds/scooters up to 125cc.
     * motorcycle_medium:  125cc to 500cc
     * motorcycle_large: 500cc+
     * motorcycle_average: uUnknown engine size
     *
     */
    vehicleType: PassengerRoadEstimateRequest.vehicle_type
}

export namespace PassengerRoadEstimateRequest {
    /**
     * car_mini: smallest category of car sometimes referred to as a city car. Examples include: Citroën C1, Fiat/Alfa Romeo 500 and Panda, Peugeot 107, Volkswagen up!, Renault TWINGO, Toyota AYGO, smart fortwo and Hyundai i 10.
     * car_supermini: car that is larger than a city car, but smaller than a small family car. Examples include: Ford Fiesta, Renault CLIO, Volkswagen Polo, Citroën C2 and C3, Opel Corsa, Peugeot 208, and Toyota Yaris.
     * car_lower_medium: small, compact family car. Examples include: Volkswagen Golf, Ford Focus, Opel Astra, Audi A3, BMW 1 Series, Renault Mégane and Toyota Auris.
     * car_upper_medium: classed as a large family car. Examples include: BMW 3 Series, ŠKODA Octavia, Volkswagen Passat, Audi A4, Mercedes Benz C Class and Peugeot 508.
     * car_executive: large cars. Examples include: BMW 5 Series, Audi A5 and A6, Mercedes Benz E Class and Skoda Superb.
     * car_luxury: luxury car which is niche in the European market. Examples include: Jaguar XF, Mercedes-Benz S-Class, .BMW 7 series, Audi A8, Porsche Panamera and Lexus LS.
     * car_sports: sport cars are a small, usually two seater with two doors and designed for speed, high acceleration, and manoeuvrability. Examples include: Mercedes-Benz SLK, Audi TT, Porsche 911 and Boxster, and Peugeot RCZ.
     * car_dual_purpose_4x4: sport utility vehicles (SUVs) which have off-road capabilities and four-wheel drive. Examples include: Suzuki Jimny, Land Rover Discovery and Defender, Toyota Land Cruiser, and Nissan Pathfinder.
     * car_mpv: multipurpose cars. Examples include: Ford C-Max, Renault Scenic, Volkswagen Touran, Opel Zafira, Ford B-Max, and Citroën C3 Picasso and C4 Picasso.
     * motorcycle_small: mopeds/scooters up to 125cc.
     * motorcycle_medium:  125cc to 500cc
     * motorcycle_large: 500cc+
     * motorcycle_average: uUnknown engine size
     *
     */
    export enum vehicle_type {
        CAR_MINI = 'car_mini',
        CAR_SUPERMINI = 'car_supermini',
        CAR_LOWER_MEDIUM = 'car_lower_medium',
        CAR_UPPER_MEDIUM = 'car_upper_medium',
        CAR_EXECUTIVE = 'car_executive',
        CAR_LUXURY = 'car_luxury',
        CAR_SPORTS = 'car_sports',
        CAR_DUAL_PURPOSE_4X4 = 'car_dual_purpose_4x4',
        CAR_MPV = 'car_mpv',
        MOTORCYCLE_SMALL = 'motorcycle_small',
        MOTORCYCLE_MEDIUM = 'motorcycle_medium',
        MOTORCYCLE_LARGE = 'motorcycle_large',
        MOTORCYCLE_AVERAGE = 'motorcycle_average',
    }
}
