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

const Login = () => {
    const [value, setValue] = useState()
    return (
        <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={event => console.log("Submit", event.value)}
          >
            <FormField label="Name" name="name">
              <TextInput name="name" />
            </FormField>
            <FormField label="Email" name="email" required>
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
            </FormField>

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
