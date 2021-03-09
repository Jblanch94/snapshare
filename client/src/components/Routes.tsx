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
import ExploreContainer from '../containers/ExploreContainer';
import ProfileContainer from '../containers/ProfileContainer';
import About from './pages/Profile/About';
import Favorites from './pages/Profile/Favorites';
import Albums from './pages/Profile/Albums';

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
          <ExploreContainer />
        </Route>
        <Route
          exact
          path="/user"
          render={() =>
            authenticated ? <ProfileContainer /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/profile/about"
          render={() =>
            authenticated ? (
              <>
                <ProfileContainer />
                <About />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/profile/favorites"
          render={() =>
            authenticated ? (
              <>
                <ProfileContainer />
                <Favorites />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/profile/albums"
          render={() =>
            authenticated ? (
              <>
                <ProfileContainer />
                <Albums />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default Routes;
