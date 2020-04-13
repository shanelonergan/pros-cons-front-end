import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    MaskedInput,
    TextInput,
} from 'grommet'

const Login = ({ login }) => {
    // let history = useHistory()

    // loggedInUserId ? history.push('/') : null

    const [input, setInput] = useState()

    const handleSubmit = (event) => {
        console.log(input, "Submit")
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
                        handleSubmit(event)
                    }}
                >
                    <FormField label='Username' name='username'>
                        <TextInput name='username' />
                    </FormField>
                    <FormField label='Password'>
                        <TextInput
                            id='password-input'
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                    </FormField>
                    {/* <FormField>
                <MaskedInput
                    name="email"
                    mask={[
                    { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                    { fixed: "@" },
                    { regexp: /^[\w]+$/, placeholder: "my" },
                    { fixed: "." },
                    { regexp: /^[\w]+$/, placeholder: "com" }
                    ]}
                />
            </FormField> */}

                    <Box
                        direction='row'
                        justify='between'
                        margin={{ top: 'medium' }}
                    >
                        <Button label='Sign Up' />
                        <Button type='submit' label='Log In' primary />
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}

export default Login
