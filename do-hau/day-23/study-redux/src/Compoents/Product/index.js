import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
    const {data} = useSelector(state => state.product)
    return (
        <div>
            <button>Add new</button>
            <ul>
                {
                    // <button></button>
                    data.length && data.map(item => <li>{item.product_name}</li>)
                }
            </ul>
        </div>
    );
}

export default Index;
