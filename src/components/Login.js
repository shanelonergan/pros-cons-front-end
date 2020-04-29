import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Grommet, Form, FormField, MaskedInput, TextInput } from 'grommet'
import { User, View, Hide } from 'grommet-icons'

const Login = ({ login }) => {
	let history = useHistory()

	// loggedInUserId ? history.push('/') : null

	const [input, setInput] = useState()
	const [reveal, setReveal] = useState(false)

	const handleLogin = (event) => {
		console.log(input, 'Submit')
		event.preventDefault()
		login(input)
	}

	return (
		<Box fill align='center' justify='center'>
			<Box width='medium'>
				<Form
					input={input}
					onChange={(nextInput) => setInput(nextInput)}
					onReset={() => setInput({})}
					onSubmit={(event) => {
						// console.log('Submit', event.value)
						handleLogin(event)
					}}
				>
					<FormField label='Username' name='username'>
						<TextInput name='username' placeholder='Username' icon={<User />} reverse />
					</FormField>
					<FormField label='Password'>
						<Box direction='row'>
							<TextInput
								id='password-input'
								name='password'
								type={reveal ? 'text' : 'password'}
								placeholder='Password'
								plain
							/>
							<Button
								icon={reveal ? <View size='medium' /> : <Hide size='medium' />}
								onClick={() => setReveal(!reveal)}
							/>
						</Box>
					</FormField>

					<Box direction='row' justify='between' margin={{ top: 'medium' }}>
						<Button label='Sign Up' onClick={() => history.push('/signup')}/>
						<Button type='submit' label='Log In' primary />
					</Box>
				</Form>
			</Box>
		</Box>
	)
}

export default Login
