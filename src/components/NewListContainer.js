import React, { useState } from 'react'
import { Box, FormField, TextInput, TextArea, Text, Button } from 'grommet'
import { Edit, Add } from 'grommet-icons'

export default function NewListContainer() {
	const [name, setName] = useState('')
	const [proForm, setProForm] = useState('')
	const [conForm, setConForm] = useState('')

	const handleName = (event) => setName(event.target.value)

	return (
		<Box fill align='center'>
			<Box width='medium'>
				<Box>
					<FormField>
						<TextInput
							placeholder='New List'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</FormField>
				</Box>
				<Box direction='row-responsive' justify='center' pad='medium'>
					<Box>
						<Text size='large' margin='small'>
							pros
						</Text>
						<Box direction='row' align='center'>
							<Button icon={<Add color='brand' />} />
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
