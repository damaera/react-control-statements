import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <span>Test</span>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
