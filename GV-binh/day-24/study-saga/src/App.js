import './App.css';
import { Route, Router, Switch } from 'react-router';
import { history } from './helper/history';
import Home from './Home';
import NotFound from './Common/Components/NotFound';
import Admin from './Admin';
import SignIn from './Common/Components/SignIn';
import SignUp from './Common/Components/SignUp';
import { PrivateRouter } from './helper/PrivateRouter';
import { ROLES } from './Common/Roles';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/"> <Home /></Route>
        <Route exact path="/sign-in"> <SignIn /> </Route>
        <Route exact path="/sign-up"> <SignUp /> </Route>
        <PrivateRouter path="/admin" roles={[ROLES.ADMIN, ROLES.STAFF]} component={Admin}/>

        <Route> <NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
