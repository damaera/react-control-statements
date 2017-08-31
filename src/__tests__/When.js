import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import When from '../When';

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