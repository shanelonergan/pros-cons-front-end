import React, { useState } from 'react';
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  MaskedInput,
  TextInput
} from "grommet";

const Login = ({ login }) => {
    const [input, setInput] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        login(input)
    }

    return (
        <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            input={input}
            onChange={nextInput => setInput(nextInput)}
            onReset={() => setInput({})}
            onSubmit={event => {
                console.log("Submit", event.value)
                handleSubmit(event)
            }}
          >
            <FormField label="Name" name="name">
              <TextInput name="name" />
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

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button label="Sign Up" />
              <Button type="submit" label="Log In" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    );
}

export default Login;
