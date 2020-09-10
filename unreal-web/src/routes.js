import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import WorkCommu from './pages/workcomm'
import Create from './pages/create'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={WorkCommu} path="/work" />
                <Route component={Create} path="/create" />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes