import React from 'react';
import Header from './Header.js';
import renderer from 'react-test-renderer';

it('header renders correctly', () => {
  const tree = renderer
    .create(<Header/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});