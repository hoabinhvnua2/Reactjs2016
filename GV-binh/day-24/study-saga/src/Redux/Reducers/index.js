import { combineReducers } from "redux";
import products from "./Products";
import card from "./Cards";

const rootReducer = combineReducers({
    products,
    card
})

export default rootReducer;