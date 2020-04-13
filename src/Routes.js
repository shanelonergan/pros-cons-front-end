import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Login, SignUp } from './components'
import { UserContext } from "./UserContext";

const renderLogin = (login, userState) => {
	if (userState.loggedInUserId) {
		return <Home />
	} else {
		return <Login login={login} />
	}
}

const Routes = ({ login }) => {
    const [ userState ] = useContext(UserContext)
	return (
		<Switch>
			<Route path='/signup' component={SignUp} />
			<Route path='/login' render={() => renderLogin(login, userState)} />
			<Route exact path='/' component={ Home } />
		</Switch>
	)
}

export default Routes
