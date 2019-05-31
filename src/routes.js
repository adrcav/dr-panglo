import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Chat from './pages/Chat';
import Doctor from './pages/Doctor';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/doctor" exact component={Doctor} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
