/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SeaShippingMethod = {
    type: 'one-of',
    contains: [
        {
            type: 'VariableFuelSeaShippingMethod',
        },
        {
            type: 'VariableFuelVariableLoadSeaShippingMethod',
        },
        {
            type: 'RoRoSeaShippingMethod',
        },
        {
            type: 'HugeOilTankerSeaShippingMethod',
        },
    ],
} as const
