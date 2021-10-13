import React, { useContext } from 'react';
import { CountContext } from '../../Context';

const Result = () => {
  const {state: {count}, dispatch} = useContext(CountContext);
  
  const handleIncrement = () => {
      dispatch({type: "INCREMENT"})
  }

  const handleDecrement = () => {
    dispatch({type: "DECREMENT"})
  }

    return (
        <div>
            <p>Tôi là result: {count}</p>
            
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Result;
