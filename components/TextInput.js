// @flow
import * as React from 'react';
import Form from './Form';
import * as validation from '../server/validation';
import Text from './Text';

const ErrorMessage = props => {
  if (props.validationError == null) return null;
  return <Text color="error">{errorToMessage(props.validationError)}</Text>;
};

const errorToMessage = (validationError: validation.ValidationError) => {
  switch (validationError.type) {
    case 'trim':
      return 'trimuj pls';
    case 'required':
      return 'dopln pls';
    case 'email':
      return 'takhle email nevypada';
    case 'minLength':
      return `minimalni delka je: ${validationError.minLength}`;
    case 'maxLength':
      return `maximalni delka je: ${validationError.maxLength}`;
    default: {
      (validationError: empty);
      return '';
    }
  }
};

type TextInputProps = {|
  value: string,
  onChange: (value: string) => void,
  type?: 'text' | 'password' | 'email',
  error?: ?validation.ValidationError,
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
        <ErrorMessage validationError={this.props.error} />
      </div>
    );
  }
}

export default TextInput;
