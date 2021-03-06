

const initialState = {
    data: [
        {
            product_name: 'Iphone 13',
            price: '2000$'
        }
    ],
    loading: false,
    error: ''
}

const product = (state = initialState, actions) => {
    const { type, payload } = actions
    switch (type) {
        case "GET_ALL":
            return {...state, loading: true}
        case "GET_ALL_SUCCESS":
            return {...state, loading: false, data: payload}
        case "ADD_NEW":
            return {...state, loading: false, data: [...state.data, payload]}
        default:
            return {...state}
    }
}

export default product;