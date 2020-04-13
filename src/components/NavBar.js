import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Header, Button, Select } from 'grommet'
import { Home } from 'grommet-icons'

const NavBar = ({themesObj, setTheme}) => {
    let history = useHistory()
    const [themeName, setThemeName] = useState("grommet");

    const handleHome = () => {
        history.push('/')
    }

    useEffect(() => {
      // console.log('themesObj:', themesObj)
      setTheme(themesObj[themeName])
    }, [themeName]);

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
