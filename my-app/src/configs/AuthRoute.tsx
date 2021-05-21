import { PATH } from '../util/constants';
import { Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const uid = localStorage.getItem('uid');

const AuthRoute = (props: any) => {
    const history = useHistory();
    const path = props.path;

    useEffect(() => {
        if (!uid) {
            history.replace(PATH.LOGIN_PATH);
        }
        else if (path === PATH.LOGIN_PATH || path === PATH.DEFAULT) {
            history.replace(PATH.DASHBOARD_PATH);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Route {...props}></Route>
    );
}

export default AuthRoute;