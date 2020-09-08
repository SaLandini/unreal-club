import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import WorkCommu from './pages/workcomm'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={WorkCommu} path="/work" />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes