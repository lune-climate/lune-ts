/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShippingMethod = {
    type: 'one-of',
    contains: [
        {
            type: 'SimpleShippingMethod',
        },
        {
            type: 'SeaShippingMethod',
        },
        {
            type: 'ContainerShippingMethod',
        },
        {
            type: 'IdentifiedVesselShippingMethod',
        },
    ],
} as const
