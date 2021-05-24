import { PATH } from '../util/constants';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import firebaseApp from './firebase';
import Dashboard from '../containers/Dashboard/views/Dashboard';

const AuthRoute = () => {
    const history = useHistory();
    const [isLogged, setIsLogined] = useState(false);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLogined(true);
                history.push(PATH.DASHBOARD_PATH);
            } else {
                // User is signed out
                history.push(PATH.LOGIN_PATH);
            }
        });
    }, [history]);

    if (isLogged) {
        return (
            <Switch>
                <Route path={PATH.DASHBOARD_PATH} component={Dashboard} />
            </Switch>
        );
    }

    return <Route path={PATH.DEFAULT} />
}

export default AuthRoute;