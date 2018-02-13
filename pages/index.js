// @flow
import * as React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import Auth from '../components/Auth';

type IndexProps = {
  now: number,
};

const Index = (props: IndexProps) => (
  <Page title="Home">
    Welcome to next.js! Now is {props.now}
    <Auth />
  </Page>
);

export default Index;
