import { actionCard } from "../Actions/Cards";


const initialCard = {
    data: [],
    error: '',
}



const card = (state = initialCard, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case actionCard.ADD_TO_CARD:
            const yes = state.data.some(d => d.id === payload.id);
            if(yes) {
                const arrNew = state.data.map(d => (d.id === payload.id ? {...d, count: d.count + 1} : d ));
                return {...state, data: arrNew};
            }
            return {...state, data: [...state.data, {...payload, count: 1}]}
        case actionCard.EDIT_TO_CARD:
            const arrNew = state.data.map(d => (d.id === payload.id ? {...d, count: payload.count} : d ));
            return {...state, data: arrNew};
        case actionCard.DELETE_TO_CARD: 
            const arr = state.data.filter(c => c.id !== payload);
            return {...state, data: arr}
        default:
            return state;
    }
}

export default card;