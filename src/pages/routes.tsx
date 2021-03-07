import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Feed from './Feed';
import Login from './Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Feed} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
}

export default Routes;