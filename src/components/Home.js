import React, {useContext} from 'react';
import { Box, Button, Grommet, Text } from "grommet";
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { UserContext } from "../UserContext";

const Home = () => {
    let history = useHistory();
    const [ userState, userDispatch ] = useContext(UserContext)
    const { username, loggedInUserId } = userState

    const handleLogin = () => {
        history.push('/login');
    };

    const handleLogout = () => {
        userDispatch({type: 'LOGOUT'})
    }

    const renderUser = () => {
        return (
            <>
            <Text>
                Welcome, {username}
            </Text>
            <Button label="Log Out" onClick={ handleLogout }/>
            </>
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
