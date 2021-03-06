import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Navbar from './ui/Navbar';
import Login from './pages/Login';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

interface RoutesProps {
  authenticated: boolean;
}

const Routes: React.FC<RoutesProps> = ({ authenticated }) => {
  return (
    <Router>
      <Navbar authenticated={authenticated} />
      <Switch>
        <Route
          exact
          path="/sign-up"
          render={() =>
            authenticated ? <Redirect to="/explore" /> : <SignUp />
          }
        />

        <Route path="/" exact>
          <Home />
        </Route>
        <Route
          exact
          path="/login"
          render={() =>
            authenticated ? <Redirect to="/explore" /> : <Login />
          }
        />

        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route
          exact
          path="/user"
          render={() => (authenticated ? <Profile /> : <Redirect to="/" />)}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
