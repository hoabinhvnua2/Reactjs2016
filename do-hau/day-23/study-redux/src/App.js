import logo from './logo.svg';
import './App.css';
import Count from './Compoents/Count';
import Product from './Compoents/Product'
// import {createStore} from 'redux';

// const intitialState = {
//   data: [],
//   loading: false,
//   error: ''
// }
// const reduce = (state=intitialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {...state}
//     default:
//       return {...state}
//   }
// }
// const store = createStore(reduce)
function App() {
  return (
    <div className="App">
      <Count/>
      <Product/>
    </div>
  );
}

export default App;
