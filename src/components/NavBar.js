import React from 'react'
import { Header, Button, Menu } from 'grommet'
import { Home } from 'grommet-icons'

const NavBar = () => {
    return (
        <Header background='brand'>
            <Button icon={<Home />} hoverIndicator />
            <Menu label='account' items={[{ label: 'logout' }]} />
        </Header>
    )
}

export default NavBar
