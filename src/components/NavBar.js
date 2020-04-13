import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Header, Button, Select } from 'grommet'
import { Home } from 'grommet-icons'

const NavBar = () => {
    let history = useHistory()
    const [themeName, setThemeName] = useState("grommet");

    const handleHome = () => {
        history.push('/')
    }
    return (
        <Header background='brand'>
            <Button icon={<Home />} hoverIndicator onClick={handleHome} />
            <Select
              plain
              size="small"
              options={[
                "grommet",
                "dark",
                "hpe",
                "hpeV0",
                "aruba",
                "hp",
                "dxc",
                "v1"
              ]}
              value={themeName}
              onChange={event => setThemeName(event.option)}
              width='5vw'
            />
        </Header>
    )
}

export default NavBar
