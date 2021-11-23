import { createSelector } from 'reselect'

const getProduct = state => state.products;

export const productSelector = createSelector(
    getProduct,
    product => product
)