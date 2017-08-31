import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Otherwise from '../Otherwise';

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