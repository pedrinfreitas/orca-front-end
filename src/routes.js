import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Logon from './pages/Logon';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Home} />
                
                <Route  path="/register" component={Register} /> 

                <Route  path="/logon" component={Logon} />

            </Switch>
        </BrowserRouter>
    );
    
}
