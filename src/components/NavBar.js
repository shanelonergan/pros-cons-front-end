import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Button, Select, Menu } from 'grommet'
import { Home } from 'grommet-icons'
import { Actions, Cloud } from 'grommet-icons'

const NavBar = ({ themesObj, setTheme, theme }) => {
	let history = useHistory()
	const [themeString, setThemeString] = useState('light')
  const [themeName, setThemeName] = useState('grommet')

	const handleHome = () => {
		history.push('/')
	}

	useEffect(() => {
		// console.log('themesObj:', themesObj)
		setTheme(themesObj[themeName])
	}, [themeName])

  const changeTheme = (name1, name2) => {
    setThemeString(name1)
    setTheme(themesObj[name2])
  }

	return (
		<Header background='brand'>
			<Button icon={<Home />} hoverIndicator onClick={handleHome} />
			<Select
				plain
				size='small'
				options={['grommet', 'dark', 'hpe', 'aruba', 'hp', 'dxc', 'v1']}
				value={themeName}
				onChange={(event) => setThemeName(event.option)}
        margin='xsmall'
			/>
			<Menu
				label='Theme'
				items={[
					{ label: 'Light', onClick: () => changeTheme('Light', 'grommet'), icon: (<Actions/>) },
					{ label: 'Dark', onClick: () => changeTheme('dark', 'dark'), icon: (<Cloud/>) },
				]}
			/>
		</Header>
	)
}

export default NavBar
