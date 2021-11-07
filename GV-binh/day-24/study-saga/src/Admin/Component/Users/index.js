import React from "react";
import { Redirect } from "react-router";
import Guard from "../../../Common/Components/Guard";
import { ROLES } from "../../../Common/Roles";

const User = () => {
    const auth = JSON.parse(localStorage.getItem('auth'))
  return (
    <Guard accessWhen={auth.role === ROLES.STAFF} callBack={() => <Redirect to={{pathname: '/admin'}}/>}>
      <div>Tối là User</div>
    </Guard>
  );
};

export default User;
