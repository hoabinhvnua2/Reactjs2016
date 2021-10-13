import React, { createContext, useReducer } from "react";

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    const { type } = action
    switch (type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        case "DECREMENT":
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

export const CountContext = createContext(initialState)

const CountProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{state, dispatch}}>
            { children }
        </CountContext.Provider>
    )
}

export default CountProvider;

