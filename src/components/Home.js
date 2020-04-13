import React, {useContext} from 'react';
import { Box, Button, Grommet, Text } from "grommet";
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import useUser from '../hooks/useUser'
import { UserContext } from "../UserContext";

const Home = (loggedInUserId) => {
    let history = useHistory();
    const user = useContext(UserContext)

    const handleLogin = () => {
        history.push('/login');
    };

    const renderUser = () => {
        console.log(user.username)
        return (
            `Welcome, ${user.username}`
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
