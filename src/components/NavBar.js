import React from 'react'
import { useHistory } from 'react-router-dom';
import { Header, Button, Menu } from 'grommet'
import { Home } from 'grommet-icons'

const NavBar = () => {
    let history = useHistory()

    const handleHome = () => {
        history.push('/')
    }
    return (
        <Header background='brand'>
            <Button icon={<Home />} hoverIndicator onClick={handleHome} />
            <Menu label='account' items={[{ label: 'logout' }]} />
        </Header>
    )
}

export default NavBar
