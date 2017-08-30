import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import If from '../If';
import When from '../When';
import Otherwise from '../Otherwise';
import Choose from '../Choose';

describe('<If />', () => {
  it('should render children when condition is true', () => {
    const Children = <span>Hello</span>
    const wrapper = mount(
      <If condition={true}>{Children}</If>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it('should not render children when condition is false', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <If condition={false}>{Children}</If>
    );
    expect(wrapper.contains(Children)).to.equal(false);
  });
});

describe('<When />', () => {
  it('should render children when condition is true', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <When condition={true}>{Children}</When>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it('should not render children when condition is false', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <When condition={false}>{Children}</When>
    );
    expect(wrapper.contains(Children)).to.equal(false);
  });
});

describe('<Otherwise />', () => {
  it('should render children when condition is true', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Otherwise condition={true}>{Children}</Otherwise>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it('should render children when condition is false', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Otherwise condition={false}>{Children}</Otherwise>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });
});

describe('<Choose />', () => {
  it('should not accept span', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Choose>
        {Children}</Choose>
    );
    expect(wrapper.contains(Children)).to.equal(false);
  });
  it('should accept When', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Choose>
        <When condition={true}>
          {Children}
        </When>
      }</Choose>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });
});