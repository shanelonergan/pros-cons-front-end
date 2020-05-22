import React, { useState } from 'react'
import { Box, FormField, TextInput, Form, Text, Button } from 'grommet'
import { Edit, Add, Like, Dislike } from 'grommet-icons'

export default function NewListContainer() {
	const [name, setName] = useState('')
	const [proForm, setProForm] = useState('')
	const [conForm, setConForm] = useState('')
	const [prosList, setProsList] = useState([])
	const [constList, setConsList] = useState([])

	// const renderListItem = (itemText) => {
	// 	return (
	// 		<Box direction='row' align='center'>
	// 			<Like />
	// 			<Text>{itemText}</Text>
	// 		</Box>
	// 	)
	// }

	const renderProsList = () => {
		const prosArr = prosList.map((pro) => {
			return (
				<Box direction='row' align='center' pad='medium'>
					<Like />
					<Text size='medium' margin='small'>{pro}</Text>
				</Box>
			)
		})

		return prosArr
	}

	const handleAddPro = (event) => {
		setProsList([...prosList, event.target.value])
	}

	return (
		<Box fill align='center'>
			<Box width='large' align='center'>
				<Box width='medium'>
					<FormField>
						<TextInput
							placeholder='New List'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
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
			</Box>
		</Box>
	)
}
