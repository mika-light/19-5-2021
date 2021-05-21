import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { PATH } from './util/constants';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AuthRoute from './configs/AuthRoute';

const Login = lazy(() => import('./containers/Auth/views/Login'));
const Dashboard = lazy(() => import('./containers/Dashboard/views/Dashboard'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <AuthRoute exact path={PATH.DEFAULT} />
              <AuthRoute exact path={PATH.LOGIN_PATH} component={Login} />
              <AuthRoute path={PATH.DASHBOARD_PATH} component={Dashboard} />
              <AuthRoute component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
