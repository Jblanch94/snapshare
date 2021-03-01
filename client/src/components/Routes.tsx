import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Navbar from './ui/Navbar';

const Routes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
