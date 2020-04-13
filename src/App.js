import React, { useEffect, useState } from 'react'
import useUser from './hooks/useUser'
import { UserContext } from './UserContext'

// => Grommet \\
import { Grommet, Box, ResponsiveContext, Footer, Text, Main } from 'grommet'
import { Grommet as GrommetIcon } from 'grommet-icons'

// => Themes \\
import { grommet, dark } from 'grommet/themes'
import { hpe } from "grommet-theme-hpe";
import { aruba } from "grommet-theme-aruba";
import { hp } from "grommet-theme-hp";
import { dxc } from "grommet-theme-dxc";
import { v1 } from "grommet-theme-v1";

// => Components \\
import { NavBar } from './components'
import Routes from './Routes'

function App() {
	const [userState, userDispatch, login, getUserData] = useUser()
	const { loggedInUserId, username, email, error, token } = userState

	const themesObj = {grommet, dark, hpe, aruba, hp,dxc, v1}
	const [theme, setTheme] = useState(dark)

	useEffect(() => {
		const storageObj = {
			user_id: localStorage.getItem('loggedInUserId'),
			token: localStorage.getItem('token'),
		}

		if (storageObj.user_id) {
			userDispatch({ type: 'SET', payload: storageObj })
			getUserData(storageObj.user_id, storageObj.token)
		}
	}, [loggedInUserId])

	return (
		<Grommet theme={theme} full>
			<ResponsiveContext.Consumer>
				{(size) => (
					<>
						<UserContext.Provider value={[userState, userDispatch]}>
							<NavBar
                                themesObj={themesObj}
                                setTheme={setTheme}
                                theme={theme}
                            />
							<Main>
								<Box fill align='center' justify='center' pad='large'>
									<Routes
                                        login={login}
                                    />
								</Box>
							</Main>
							<Footer background='brand' pad='small'>
								<Box align='center' direction='row' gap='xsmall'>
									<GrommetIcon color='accent-2' size='medium' />
									<Text alignSelf='center' color='brand' size='small'>
										Grommet
									</Text>
								</Box>
								<Box>
									<Text>The screen is currently {size}</Text>
								</Box>

								<Text textAlign='center' size='xsmall'>
									© Shane Lonergan 2020
								</Text>
							</Footer>
						</UserContext.Provider>
					</>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
