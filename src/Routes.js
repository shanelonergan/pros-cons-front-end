import React from 'react';
import {Switch, Route} from ‘react-router-dom’
import {Home, Login, SignUp} from './Components'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default Routes;
