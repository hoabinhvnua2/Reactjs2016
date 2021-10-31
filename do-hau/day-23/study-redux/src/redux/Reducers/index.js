import { combineReducers } from "redux";
import count from './count'
import product from './Products'
const rootReducer = combineReducers({
    count,
     product
})
export default rootReducer;