// @flow
import * as React from 'react';

type FormProps = {|
  children: React.Node,
  onSubmit: () => void,
|};

class Form extends React.PureComponent<FormProps> {
  handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return <form onSubmit={this.handleFormSubmit}>{this.props.children}</form>;
  }
}

export default Form;
