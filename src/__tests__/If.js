import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import If from '../If';

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