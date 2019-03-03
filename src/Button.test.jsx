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
  // it('should return the value of the button pressed', () => {
  //   // const mockClick = jest.fn().mockReturnValue('7');
  //   // const mockKeyDown = jest.fn.mockReturnValue('7');
  //   // const button = { label: '7', value: '7', mockClick, mockKeyDown };
  //   // const wrapper = shallow(<Button {...button} />);
  //   expect()
  // });
});
