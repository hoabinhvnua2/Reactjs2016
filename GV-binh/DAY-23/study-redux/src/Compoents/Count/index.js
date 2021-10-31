import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Count = () => {
    const { count } = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{count}</p>
            <button onClick={() =>  dispatch({type: 'INCREMENT'})}>Cộng</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Trừ</button>
        </div>
    );
}

export default Count;
