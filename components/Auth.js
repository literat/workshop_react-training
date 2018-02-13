// @flow
import * as React from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Button from './Button';

type AuthState = {|
  email: string,
  password: string,
|};

class Auth extends React.PureComponent<{}, AuthState> {
  state = {
    email: '',
    password: '',
  };

  handleFormSubmit = () => {
    const variables = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(variables);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <TextInput
          type="email"
          value={this.state.email}
          onChange={email => this.setState({ email })}
        />
        <TextInput
          type="password"
          value={this.state.password}
          onChange={password => this.setState({ password })}
        />

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Auth;
