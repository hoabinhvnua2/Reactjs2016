import React, { useState, useEffect, useLayoutEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Privaterouter from './PrivateRouter';
import "./App.css";
import Product from "./Product";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

function App() {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log('effect')
  //   if(value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  // }, [value]);

  // useLayoutEffect(() => {
  //   console.log('layout')
  //   if(value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  // }, [value])

  return (
    <div className="App">
      {/* {console.log('render')}
      <p>Your Value: { value }</p>
      <button onClick={() => setValue(0)}>Click</button> */}
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Privaterouter path="/products">
            <Product />
          </Privaterouter>
        </Switch>
      </Router>
      {/* <Dashboard /> */}
     
    </div>
  );
}

export default App;
