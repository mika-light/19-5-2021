import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { PATH } from './util/constants';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './configs/AuthRoute';

const Login = lazy(() => import('./containers/Auth/views/Login'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={PATH.LOGIN_PATH} component={Login} />
              <Route exact path={PATH.REGISTER_PATH} component={Login} />
              <Route exact path={PATH.FORGOT_PASSWORD} component={Login} />
              <Route path={PATH.DEFAULT} component={AuthRoute} />
            </Switch>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
