// @flow
import * as React from 'react';

type ButtonProps = {
  children: string,
};

class Button extends React.PureComponent<ButtonProps> {
  render() {
    return (
      <button>
        {this.props.children}
        <style jsx>{`
          button {
            margin: 10px;
          }
        `}</style>
      </button>
    );
  }
}

export default Button;
