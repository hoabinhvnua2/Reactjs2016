export const actionProduct = Object.freeze({
    GET_ALL: 'GET_ALL',
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_ERR: 'GET_ALL_ERR',
})

const getProduct = () => ({
    type: actionProduct.GET_ALL,
    payload: 'abcd'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProduct
}

