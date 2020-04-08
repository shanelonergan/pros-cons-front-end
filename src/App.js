import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
// import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { Grommet, Box, ResponsiveContext } from 'grommet'
import useUser from './hooks/useUser'

function App() {
  const [userState, userDispatch, login, getUserData, editUserBio] = useUser()
  const { loggedInUserId, username, bio, error, token } = userState

  useEffect(
    () => {
      const storageObj = {
        user_id: localStorage.getItem('loggedInUserId'),
        token: localStorage.getItem('token')
      }

      if (storageObj.user_id) {
        userDispatch({ type: 'SET', payload: storageObj })
        getUserData(storageObj.user_id, storageObj.token)
      }
    }, [loggedInUserId]
  )

  return (
    <Grommet>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box >
                        <Box
                            direction='row'
                            flex
                            overflow={{ horizontal: 'hidden' }}
                        >
                            <Box fill align='center' justify='center'>
                                <Routes />
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
  );
}

export default App;
