
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helper/history';
import Home from './Home/Pages';

function App() {
  return (
    // <div className="App">
    //   {/* <Products /> */}
    //   {/* <Login /> */}
    //   <SignUp />
    // </div>
    <Router history={history}>

      <Switch>
        <Route path="/" exact>
           <Home/>
        </Route>
        {/* <Route path="/" exact>
           <Home/>
        </Route> */}
      </Switch>

    </Router>
  );
}

export default App;
