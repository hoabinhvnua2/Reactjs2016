import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductDetails from './Screens/Products/ProductDetail';
import NavBar from './Components/NavBar/NavBar';
import ProductListing from './Screens/Products/ProductListing';
function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
