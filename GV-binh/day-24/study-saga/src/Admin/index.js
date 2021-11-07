import React from "react";
import {
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Products from './Component/Products';
import User from "./Component/Users";

const Admin = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log("auth", auth);
  return (
    <div>
      Tôi là trang Admin:
      <br />
      <Link to="/admin/san-pham">QL Sản Phẩm </Link>
      {auth.role === "ADMIN" && <Link to="/tai-khoan">QL Tài khoản</Link>}
      <Switch>
        <Route exact path="/admin/san-pham">
          <Products />
        </Route>
        <Route exact path="/admin/tai-khoan">
          <User />
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
