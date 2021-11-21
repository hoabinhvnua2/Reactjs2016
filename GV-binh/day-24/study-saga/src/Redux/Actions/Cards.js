export const actionCard = Object.freeze({
    ADD_TO_CARD: 'ADD_TO_CAR',
    EDIT_TO_CARD: 'EDIT_TO_CARD',
    DELETE_TO_CARD: 'DELETE_TO_CARD'
})


const addToCard = (product) => ({
    type: actionCard.ADD_TO_CARD,
    payload: product
})

const editToCard = (productEdited) => ({
    type: actionCard.EDIT_TO_CARD,
    payload: productEdited
})

const removeCard = (id) => ({
    type: actionCard.DELETE_TO_CARD,
    payload: id
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addToCard,
    editToCard,
    removeCard
}