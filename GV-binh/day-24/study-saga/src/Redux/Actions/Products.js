export const actionProduct = Object.freeze({
    GET_ALL: 'GET_ALL',
    GET_ALL_SUCCESS: 'GET_ALL_SUCCESS',
    GET_ALL_ERR: 'GET_ALL_ERR',
    ADD_COMMENT: 'ADD_COMMENT',
})

const getProduct = () => ({
    type: actionProduct.GET_ALL,
    payload: 'abcd'
})

const addComment = (info) => ({
    type: actionProduct.ADD_COMMENT,
    payload: info
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProduct,
    addComment,
}

