// @flow
import * as React from 'react';
import Link from 'next/link';
import Text from './Text';

const Separator = () => <span> | </span>;

class MainNavigation extends React.PureComponent<{}> {
  render() {
    return (
      <nav>
        <Link href="/">
          <a>
            <Text>Home</Text>
          </a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>
            <Text>About</Text>
          </a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>
            <Text>Contact</Text>
          </a>
        </Link>
      </nav>
    );
  }
}

export default MainNavigation;
