import { combineReducers } from "redux";
import product from "./Products";
import card from "./Cards";

const rootReducer = combineReducers({
    product,
    card
})

export default rootReducer;