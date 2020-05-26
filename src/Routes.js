import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Login, SignUp, ListsContainer, ListContainer, LoginNotice } from './components'
import { UserContext } from "./UserContext";

const renderLogin = (login, userState) => {
		return <Login login={login} />
}

const renderSignUp = (userState, signUp) => {
	return <SignUp userState={userState} signUp={signUp} />
}

// const renderNewList = (login, userState) => {
// 	if (userState.loggedInUserId) {
// 		return <NewListContainer />
// 	} else {
// 		return <LoginNotice />
// 	}
// }

const Routes = ({ login, signUp }) => {
    const [ userState ] = useContext(UserContext)
	return (
		<Switch>
			{/* <Route path='/lists/new' render={() => renderNewList(login, userState)}/> */}
			<Route exact path='/' component={ Home } />
			<Route path='/signup' render={() => renderSignUp(userState, signUp)} />
			<Route path='/login' render={() => renderLogin(login, userState)} />
			<Route path='/lists' exact component={ListsContainer}/>
			<Route path='/lists/:id' component={ListContainer} />
		</Switch>
	)
}

export default Routes
