import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
import { CircularProgress } from '@material-ui/core';
import LoginComponent from '../pageComponents/login/loginComponent';
import PrivateRoute from './privateRouter';
// Dynamic Imports
const DetailsComponent = lazy(() => import('../pageComponents/details/detailsComponent'));
const ShowDetailsComponent = lazy(() => import('../pageComponents/details/showDetailsComponent'));
// App routing configuration
const AppRouter = () => {
    return (
        <React.Suspense fallback={<CircularProgress className="module-loader" size={44} />}>
            <Switch>
                <PrivateRoute path="/show-details" exact component={ShowDetailsComponent}/>
                <Route path="/display-details" exact component={ShowDetailsComponent}/>
                <Route path="/your-details" exact component={DetailsComponent}/>
                <Route path={["/login", "/sign-up", "/"]} exact component={LoginComponent} />
            </Switch>
        </React.Suspense>
    )
}

export default AppRouter;