import React from 'react';
import { Box, Button, Grommet, Text } from "grommet";
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Home = (loggedInUserId, username) => {
    let history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    const renderUser = () => {
        console.log(username)
        return (
            <Text>
                `Welcome,
            </Text>
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
