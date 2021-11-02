import { actionProduct } from "../Actions/Products";

const initialState = {
    data: [],
    err: '',
    isLoading: false
};

const product = (state = initialState, actions) => {
    const {type, payload} = actions;

    switch (type) {
        case actionProduct.GET_ALL:
            return {...state, isLoading: true};
        case actionProduct.GET_ALL_SUCCESS:
            return {...state, isLoading: false, data: payload};
        case actionProduct.GET_ALL_ERR:
            return {...state, isLoading: false, err: payload};
        default:
            return state;
    }
}

export default product;