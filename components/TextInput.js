// @flow
import * as React from 'react';
import Form from './Form';

type TextInputProps = {|
  value: string,
  onChange: (value: string) => void,
  type?: 'text' | 'password' | 'email',
|};

class TextInput extends React.PureComponent<TextInputProps> {
  handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input
          type={this.props.type || 'text'}
          value={this.props.value}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default TextInput;
