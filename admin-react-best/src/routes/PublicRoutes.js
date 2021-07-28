import Login from 'pages/Login';
import Signup from 'pages/Signup';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.login} component={Login} />
            <Route path={SLUGS.signup} component={Signup} />
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;
