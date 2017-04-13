import React from 'react';
import renderer from 'react-test-renderer';

import Choose from '../Choose'
import When from '../When'
import Otherwise from '../Otherwise'

it('render string when first condition true', () => {
  const tree = renderer.create(
    <Choose>
      <When condition={true}>
        Test 1
      </When>
    </Choose>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('not render second true condition', () => {
  const tree = renderer.create(
    <Choose>
      <When condition={true}>
        Test 1
      </When>
      <When condition={true}>
        Test 2
      </When>
    </Choose>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render second condition, first is false, and second is true', () => {
  const tree = renderer.create(
    <Choose>
      <When condition={false}>
        Test 1
      </When>
      <When condition={true}>
        Test 2
      </When>
    </Choose>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render otherwise', () => {
  const tree = renderer.create(
    <Choose>
      <When condition={false}>
        Test 1
      </When>
      <When condition={false}>
        Test 2
      </When>
      <Otherwise>
        Otherwise
      </Otherwise>
    </Choose>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
