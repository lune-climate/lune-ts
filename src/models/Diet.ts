/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A diet followed by an individual.
 *
 * High meat-eater is someone consuming over 100 grams of meat per day, medium is 50-99 grams per day
 * and low is less than 50 grams per day. A fish eater is someone that doesn't consume meat other than
 * fish.
 *
 */
export type Diet =
    | 'high_meat_eater'
    | 'medium_meat_eater'
    | 'low_meat_eater'
    | 'fish_eater'
    | 'vegetarian'
    | 'vegan'
