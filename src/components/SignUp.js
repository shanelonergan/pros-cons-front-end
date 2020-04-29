import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { Box, Button, Grommet, Form, FormField, MaskedInput, TextInput } from 'grommet'
import { User, View, Hide, Mail } from 'grommet-icons'

const SignUp = ({userState, signUp}) => {
    let history = useHistory()

    if (userState.username) history.push('/')

	const [input, setInput] = useState()
	const [reveal, setReveal] = useState(false)

	const handleSignUp = (event) => {
		console.log(input, 'Submit')
		event.preventDefault()
		signUp(input)
	}


	return (
		<Box fill align='center' justify='center'>
			<Box width='medium'>
				<Form
					input={input}
					onChange={(nextInput) => setInput(nextInput)}
					onReset={() => setInput({})}
					onSubmit={(event) => {
						handleSignUp(event)
					}}
				>
					<FormField label='Username' name='username'>
						<TextInput name='username' placeholder='Username' icon={<User />} reverse />
					</FormField>
                    <FormField label='Email' name='email'>
						<TextInput name='email' placeholder='Email' icon={<Mail />} reverse />
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
						<Button label='Log In' onClick={() => history.push('/login')}/>
						<Button type='submit' label='Sign Up' primary />
					</Box>
				</Form>
			</Box>
		</Box>
	)
}

export default SignUp;
