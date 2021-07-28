import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import Dashboard from 'pages/Dashboard';
import Page1 from 'pages/Page1';


function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component ={Dashboard} />
                <Route exact path={SLUGS.overviewTwo}  component ={Page1}/>
                <Route exact path={SLUGS.overviewThree} component ={Page1} />
                <Route exact path={SLUGS.overview} component ={Page1} />

                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
