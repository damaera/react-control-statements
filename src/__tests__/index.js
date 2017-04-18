import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import If from '../If';

describe('Shallow rendering', () => {

  it('just test', () => {
    const wrapper = shallow(
      <If condition={false}>
        <span>hai</span>
      </If>
    );
    expect(wrapper).to.not.be.null;
  });

});