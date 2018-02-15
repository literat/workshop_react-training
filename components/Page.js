// @flow
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Text from './Text';
import ThemeToggler from './ThemeToggler';
import Container from './Container';

class Header extends React.PureComponent<{}> {
  render() {
    return (
      <ul>
        <a>home</a>
        <a>about</a>
      </ul>
    );
  }
}

class Footer extends React.PureComponent<{}> {
  render() {
    <div>LMC</div>;
  }
}

type PageProps = {
  children: React.Node,
  title: string,
};

class Page extends React.PureComponent<PageProps> {
  render() {
    return (
      <ThemeToggler>
        <Container>
          <div>
            <style jsx global>
              {`
                body {
                  background: white;
                }
              `}
            </style>
            <Head>
              <title>{this.props.title}</title>
              <meta charset="utf-8" />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <header>
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
            </header>

            {this.props.children}
          </div>
        </Container>
      </ThemeToggler>
    );
  }
}

export default Page;
