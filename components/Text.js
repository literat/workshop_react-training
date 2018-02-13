// @flow
import * as React from 'react';

type TextProps = {
  children: string,
  color?: 'primary' | 'error',
};

class Text extends React.PureComponent<TextProps> {
  render() {
    return (
      <span>
        <style jsx>
          {`
            span {
              line-height: 1.5;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
            }
          `}
        </style>
        <style jsx>{`
          span {
            color: ${this.props.color === 'error' ? 'red' : '#333'};
          }
        `}</style>
        {this.props.children}
      </span>
    );
  }
}

export default Text;
