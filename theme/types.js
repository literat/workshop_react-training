// @flow
export type Color = '#fff' | '#999';

export type Theme = {|
  type: 'light' | 'dark',
  color: Color,
  textColor: Color,
|};
