import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import { Box, FormField, TextInput, Form, Text, Button } from 'grommet'
import { Edit, Add, Like, Dislike, CloudUpload } from 'grommet-icons'
// import { ResizeSpinLoader } from 'react-css-loaders'
import API from '../config/API'

export default function NewListContainer() {
	const [listName, setListName] = useState(null)
	const [proForm, setProForm] = useState('')
	const [conForm, setConForm] = useState('')
	const [prosList, setProsList] = useState([])
	const [constList, setConsList] = useState([])

	const [userState] = useContext(UserContext)
	const [currentList, setCurrentList] = useState(null)
	console.log(currentList)

	useEffect(() => {
		const urlArr = window.location.href.split('/')
		const listId = urlArr[4]
		fetch(API + '/lists/' + listId)
		.then(res => res.json())
		.then(listObj => {
			console.log('list:', listObj)
			setCurrentList(listObj)
		})
	}, [])


	function handleName() {
		const userId = +userState.loggedInUserId
		const data = { name: listName, user_id: userId }
		console.log('data:', data)
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}

		fetch(API + '/lists', config)
		.then(res => res.json())
		.then(console.log)
	}

	const renderProsList = () => {
		const prosArr = prosList.map((pro) => {
			return (
				<Box direction='row' align='center' pad='medium'>
					<Like />
					<Text size='medium' margin='small'>
						{pro}
					</Text>
				</Box>
			)
		})

		return prosArr
	}

	const handleAddPro = (event) => {
		setProsList([...prosList, event.target.value])
	}

	return (
		<>
		<Box fill align='center'>
			{ currentList ? (
			<Box width='large' align='center'>
				<Box width='medium'>
					<FormField>
						<Box direction='row'>
							<TextInput
								id='name-input'
								placeholder='New List'
								value={listName !== null ? listName : currentList.name}
								onChange={(event) => setListName(event.target.value)}
								plain
							/>
							{/* <Text>{currentList.listName}</Text> */}
							<Button
								icon={<CloudUpload />}
								onClick={handleName}
							/>
						</Box>
					</FormField>
				</Box>
				<Box direction='row-responsive' justify='center' pad='medium' gap='small'>
					<Box>
						<Text size='large' margin='small'>
							pros
						</Text>
						{prosList !== [] ? renderProsList() : null}
						<Form
							direction='row'
							onSubmit={(event) => {
								setProsList([...prosList, proForm])
							}}
						>
							<Box direction='row' align='center'>
								<Button icon={<Add color='brand' />} type='submit' />
								<TextInput
									placeholder='Add a pro'
									value={proForm}
									onChange={(event) => setProForm(event.target.value)}
								/>
							</Box>
						</Form>
					</Box>
					<Box>
						<Text size='large' margin='small'>
							cons
						</Text>
						<Box direction='row' align='center'>
							<Button icon={<Add color='brand' />} />
							<TextInput
								placeholder='Add a con'
								value={conForm}
								onChange={(event) => setConForm(event.target.value)}
							/>
						</Box>
					</Box>
				</Box>
			</Box>)
			: (
				<Box justify='center' align='center' height='100vh'>
					Loading...
				</Box>
			)}
		</Box>
		</>
	)
}
