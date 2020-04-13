import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Login, SignUp } from './components'
import { UserContext } from "./UserContext";

const renderLogin = (login, loggedInUserId) => {
    if(loggedInUserId) {
        return (<Home/>)
    } else {
        return (
            <Login
                login={ login }
            />
        )
    }
}

const renderHome = (loggedInUserId, username ) => {
    return (
        <Home
            loggedInUserId={loggedInUserId}
            username = {username}
        />
    )
}

const Routes = ({ login, loggedInUserId, username }) => {

    return (
        <Switch>
            <UserContext.Provider>
                <Route path="/signup" component={ SignUp } />
                <Route path="/login" render={ () => renderLogin(login, loggedInUserId) } />
                <Route exact path="/" component={ () => renderHome(loggedInUserId, username) } />
            </UserContext.Provider>
        </Switch>
    );
}

export default Routes;
