import React from 'react';
import renderer from 'react-test-renderer';

import If from '../If'

it('render string when true', () => {
  const tree = renderer.create(
    <If condition={true}>
      Test
    </If>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render element when true', () => {
  const tree = renderer.create(
    <If condition={true}>
      <span>sdfsdf</span>
    </If>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('not render when false', () => {
  const tree = renderer.create(
    <If condition={false}>
      <span>sdfsdf</span>
    </If>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
