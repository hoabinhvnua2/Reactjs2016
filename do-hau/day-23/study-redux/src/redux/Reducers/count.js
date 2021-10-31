
import {actionCount} from "../Actions/Counts"
const initialState = {
    count: 0,
    loading: false,
    error: ''
}
const count = (state = initialState, action) => {
    const{type} = action;
    switch (type) {
        case actionCount.INCREMENT:
            
            return {...state, count: state.count + 1}
            case actionCount.DECREMENT:
            
                return {...state, count: state.count - 1}
        default:
            return {...state}
    }
}
export default count