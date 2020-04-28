import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Login, SignUp, ListsContainer, LoginNotice, NewListContainer } from './components'
import { UserContext } from "./UserContext";

const renderLogin = (login, userState) => {
	if (userState.loggedInUserId) {
		return <Home />
	} else {
		return <Login login={login} />
	}
}

const renderNewList = (login, userState) => {
	if (userState.loggedInUserId) {
		return <NewListContainer />
	} else {
		return <LoginNotice />
	}
}

const Routes = ({ login }) => {
    const [ userState ] = useContext(UserContext)
	return (
		<Switch>
			<Route path='/lists/new' render={() => renderNewList(login, userState)}/>
			<Route path='/lists' component={ListsContainer}/>
			<Route path='/signup' component={SignUp} />
			<Route path='/login' render={() => renderLogin(login, userState)} />
			<Route exact path='/' component={ Home } />
		</Switch>
	)
}

export default Routes
