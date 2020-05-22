import React, { useState } from 'react'
import { Box, FormField, TextInput, TextArea, Text, Button } from 'grommet'
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
		const prosArr = prosList.map(pro => {
			return <Text>{pro}</Text>
		})

		return prosArr
	}

	const handleAddPro = (event) => {
		setProsList([...prosList, event.target.value])
	}

	return (
		<Box fill align='center'>
			<Box width='large' align='center' >
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
						{prosList !== []
							? renderProsList()
							: null
						}
						<Box direction='row' align='center'>
							<Button icon={<Add color='brand' />}
							onClick={(event) => {
								setProsList([...prosList, proForm])}}
							/>
							<TextInput
								placeholder='Add a pro'
								value={proForm}
								onChange={(event) => setProForm(event.target.value)}
							/>
						</Box>
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
