import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Home, Login, SignUp } from './components'

const renderLogin = () => {
    return (
        <Login
            login={ login }
        />
    )
}

const Routes = ({ login }) => {

    return (
        <Switch>
            <Route path="/signup" component={ SignUp } />
            <Route path="/login" render={ renderLogin } />
            <Route exact path="/" component={ Home } />
        </Switch>
    );
}

export default Routes;
