// @flow
import * as React from 'react';

type TextProps = {
  children: string,
};

class Text extends React.PureComponent<TextProps> {
  render() {
    return (
      <span>
        <style jsx>
          {`
            span {
              color: #333;
              line-height: 1.5;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
            }
          `}
        </style>
        {this.props.children}
      </span>
    );
  }
}

export default Text;
