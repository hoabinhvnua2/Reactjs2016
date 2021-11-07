import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productAction from '../../Redux/Actions/Products'


const Products = () => {
    const dispatch = useDispatch();
    const {product } = useSelector(state => state)

    console.log('product', product)
    useEffect(() => {
        dispatch(productAction.getProduct())
    }, []);

    return (
        <div>
            tôi là sản phẩm
        </div>
    );
}

export default Products;
