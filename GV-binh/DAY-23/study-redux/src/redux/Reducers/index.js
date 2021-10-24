import { combineReducers } from "redux";
import count from './Count'
import product from "./Product";

const rootReducer = combineReducers({
    count,
    product
})

export default rootReducer;