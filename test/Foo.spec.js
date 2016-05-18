import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Foo from '../app/components/Foo';

describe('<Foo>', function () {
  
  it('should have a button', function () {
    const wrapper = shallow(<Foo/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have a div', function () {
    const wrapper = shallow(<Foo/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

});