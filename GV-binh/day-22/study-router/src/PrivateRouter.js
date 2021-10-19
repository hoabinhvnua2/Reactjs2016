import React from 'react';
import { Route, Redirect } from "react-router-dom";
  

const Privaterouter = ({children, rest}) => {
    return (
        <Route
          {...rest}
          render={({ location }) =>
            JSON.parse(localStorage.getItem('products'))?.length ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}

export default Privaterouter;
