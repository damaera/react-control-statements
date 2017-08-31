import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Choose from '../Choose';
import When from '../When';
import Otherwise from '../Otherwise';

describe('<Choose />', () => {
  it('should not accept span', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Choose>{Children}</Choose>
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