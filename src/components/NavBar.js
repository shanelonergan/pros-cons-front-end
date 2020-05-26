import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from "../UserContext";

import { Header, Button, Menu, Box, Layer } from 'grommet'
import { Actions, Cloud, List, Add, Logout, Login, Home } from 'grommet-icons'
import useUser from '../hooks/useUser'

const NavBar = ({ themesObj, setTheme, theme, size, showNewList, setShowNewList }) => {
	let history = useHistory()
	const [themeString, setThemeString] = useState('light')
	const [themeName, setThemeName] = useState('grommet')
	const [ userState, userDispatch ] = useContext(UserContext)
	const { username, loggedInUserId } = userState

	console.log(setShowNewList)

	const handleHome = () => history.push('/')
	const handleNewList = () => history.push('/lists/new')
	const handleLists = () => history.push('/lists')


	useEffect(() => {
		setTheme(themesObj[themeName])
	}, [themeName])

	const changeTheme = (name1, name2) => {
		setThemeString(name1)
		setTheme(themesObj[name2])
	}

	return (
		<Header background='brand'>
			<Button icon={<Home />} hoverIndicator onClick={handleHome} />
			{/* {size === 'large' ? (
				<Select
					plain
					size='small'
					options={['grommet', 'dark', 'hpe', 'aruba', 'hp', 'dxc', 'v1']}
					value={themeName}
					onChange={(event) => setThemeName(event.option)}
					margin='xsmall'
				/>
			) : null} */}
				<Box direction='row' pad='medium'>
				{ userState.username ? (
				<Menu
					label={userState.username}
					items={[
						{
							label: <Box alignSelf='center'>My Lists</Box>,
							onClick: handleLists,
							icon: (
								<Box margin='medium'>
									<List />
								</Box>
							),
						},
						{
							label: <Box alignSelf='center'>New List</Box>,
							onClick: () => setShowNewList(true),
							icon: (
								<Box margin='medium'>
									<Add />
								</Box>
							),
						},
						{
							label: <Box alignSelf='center'>Log Out</Box>,
							onClick: () => {userDispatch({type: 'LOGOUT'})},
							icon: (
								<Box margin='medium'>
									<Logout />
								</Box>
							),
						}
					]}
				/> )
				:
				<Button label="Log In" onClick={ () => history.push('/login') } icon={<Login/>} reverse/>
				}
				<Menu
					label='Theme'
					items={[
						{
							label: <Box alignSelf='center'>Light</Box>,
							onClick: () => changeTheme('Light', 'grommet'),
							icon: (
								<Box margin='medium'>
									<Actions />
								</Box>
							),
						},
						{
							label: <Box alignSelf='center'>Dark</Box>,
							onClick: () => changeTheme('dark', 'dark'),
							icon: (
								<Box margin='medium'>
									<Cloud/>
								</Box>
							),
						},
					]}
				/>
			</Box>
		</Header>
	)
}

export default NavBar
