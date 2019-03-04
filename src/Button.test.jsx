import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
// import sinon from 'sinon';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });
describe('Button', () => {
  it('renders without crashing', () => {
    const props = {
      onClick: jest.fn(),
      handleKeyPress: jest.fn(),
      value: '7',
      label: '7',
      index: 0,
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.calculator-button')).to.have.lengthOf(1);
  });
});
