import React, { useEffect, useState } from 'react'
import useUser from './hooks/useUser'
import Routes from './Routes'
// import { Route, Switch, Link, Redirect } from 'react-router-dom'
import {
    Grommet,
    Box,
    ResponsiveContext,
    Footer,
    Text,
    Header,
    Button,
    Menu,
    Main,
} from 'grommet'
import { Grommet as GrommetIcon, Home } from 'grommet-icons'

import { NavBar } from './components'

// ==> Themes \\
import { grommet, dark } from 'grommet/themes'
import { dxc } from 'grommet-theme-dxc'

function App() {
    const [userState, userDispatch, login, getUserData, editUserBio] = useUser()
    const { loggedInUserId, username, bio, error, token } = userState

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
        <Grommet theme={dark} full>
            <ResponsiveContext.Consumer>
                {(size) => (
                    <>
                        <NavBar/>
                        <Main>
                            <Box fill align='center' justify='center'>
                                <Routes />
                            </Box>
                        </Main>
                        <Footer background='light-4' pad='small' margin='small'>
                            <Box align='center' direction='row' gap='xsmall'>
                                <GrommetIcon color='brand' size='medium' />
                                <Text
                                    alignSelf='center'
                                    color='brand'
                                    size='small'
                                >
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
                    </>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default App
