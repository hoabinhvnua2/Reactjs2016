import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import Count from './Compoents/Count';
import Product from './Compoents/Product';

function App() {
  return (
    <div className="App">
     <Count />
     <Product />
    </div>
  );
}

export default App;
