import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({type: 'ADD_NEW', payload: {product_name: 'Iphone 12', price: '1000$'}})}>Add new</button>
      <ul>{data.length && data.map((item) => <li>{item.product_name}</li>)}</ul>
    </div>
  );
};

export default Product;

// App bán sản phẩm
// giao diện có 1 thanh menu ngang, trên thanh menu ngang gồm có Sản phẩm hot, sản phẩm giảm giá, cuối thanh ngang có icon giỏ hàng
// show ra các sản phẩm và có nút mua sản phẩm
// click vào cái sản phẩm nào thì sẽ hiển thị ra chi tiết sản phảm đó và có nút mua hàng ở cuối thông tin sản phẩm
// Khi click vào nút mua sản phẩm thì icon giỏ hàng phải hiển thị được số sản phẩm đã có trong giỏ hàng

// sử MUI, react-router-dom, Redux, react-redux


