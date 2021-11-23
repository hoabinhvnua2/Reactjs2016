import { actionProduct } from "../Actions/Products";

const initialState = {
    data: [
        {
            id: '1',
            product_name: 'IPhone 13',
            comments: []
        },
        {
            id: '2',
            product_name: 'IPhone 11',
            comments: []
          }
    ],
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
        case actionProduct.ADD_COMMENT:
            const newArr = state.data.map(d => (d.id === payload.id ? {...d, comments: [...d.comments, {name: payload.user, desc: payload.desc}]} : d))
            return {...state, data: newArr};
        default:
            return state;
    }
}

export default product;