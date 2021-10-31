
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
export  {
    increment,
    decrement
}