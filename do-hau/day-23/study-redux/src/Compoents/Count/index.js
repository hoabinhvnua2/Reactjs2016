import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../../redux/Actions/Counts'

const Count = () => {
    const { count } = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{ count }</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Cộng</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Trừ</button>
        </div>
    );
}

export default Count;
