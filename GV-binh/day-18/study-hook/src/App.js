import logo from './logo.svg';
import './App.scss';
import Count from './Count';
import Products from './Products';
import ProductList from './constants/mockApi'
function App() {
  return (
    <div className="App">
      <Count />
      <Products />
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
