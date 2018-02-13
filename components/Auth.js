// @flow
import * as React from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Button from './Button';
import {
  validateEmailPassword,
  type ValidationErrors,
} from '../server/validation';

type Fields = {|
  email: string,
  password: string,
|};

type AuthState = {|
  ...Fields,
  validationErrors: ValidationErrors<Fields>,
|};

class Auth extends React.PureComponent<{}, AuthState> {
  static initialState = {
    email: '',
    password: '',
    validationErrors: {},
  };

  state = Auth.initialState;

  auth = () => {
    const variables = {
      email: this.state.email,
      password: this.state.password,
    };

    const validationErrors = validateEmailPassword(variables);
    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }
    this.setState(Auth.initialState);
  };

  render() {
    return (
      <Form onSubmit={this.auth}>
        <TextInput
          type="email"
          value={this.state.email}
          onChange={email => this.setState({ email })}
          error={this.state.validationErrors.email}
        />
        <TextInput
          type="password"
          value={this.state.password}
          onChange={password => this.setState({ password })}
          error={this.state.validationErrors.password}
        />

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Auth;
