
export const actionCount = Object.freeze({
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
})


const increment = () => ({
    type: actionCount.INCREMENT
})

const decrement = () => ({
    type: actionCount.DECREMENT
})

// eslint-disable-next-line import/no-anonymous-default-export
export {
    increment, 
    decrement
}