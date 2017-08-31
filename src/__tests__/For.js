import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import For from '../For';

describe('<For />', () => {
  it('should render children with length 3', () => {
    const Children = <span>Hello</span>
    const items = [0,1,2]
    const wrapper = mount(
      <For of={items} each="$item" >
        {Children}
      </For>
    );
    expect(wrapper.find('span').children()).to.have.length(items.length);
  });
});