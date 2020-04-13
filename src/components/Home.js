import React from 'react';
import { Box, Button, Grommet, Text } from "grommet";
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser'

const Home = (loggedInUserId) => {
    const [ userState, userDispatch, login, getUserData] = useUser()
    const { username, email, error, token } = userState
    let history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    const renderUser = () => {
        console.log(username)
        return (
            `Welcome, ${username}`
        )
    }

    return (
        <Box align="center" pad="medium" >
            { loggedInUserId
                ? renderUser()
                : <Button label="Log In" onClick={ handleLogin } />
            }
        </Box>
    );
}

export default Home;
