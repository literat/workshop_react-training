// @flow
import * as React from 'react';
import ThemeConsumer from './Theme';

type Props = {|
  children: React.Node,
|};

class Container extends React.PureComponent<Props> {
  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <div style={{ background: theme.color }}>{this.props.children}</div>
        )}
      </ThemeConsumer>
    );
  }
}

export default Container;
