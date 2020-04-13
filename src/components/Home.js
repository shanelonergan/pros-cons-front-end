import React from 'react';
import { Box, Button, Grommet } from "grommet";
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <Box align="center" pad="medium" >
            <Button label="Log In" onClick={ handleLogin } />
        </Box>
    );
}

export default Home;
