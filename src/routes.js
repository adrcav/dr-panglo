import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Chat from './pages/Chat';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/chat" exact component={Chat} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
