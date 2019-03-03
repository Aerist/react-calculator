import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
// import sinon from 'sinon';
import App from './App';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render 19 buttons', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Button)).to.have.lengthOf(21);
  });
  it('should update the state if a button is pressed', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().calculateString).to.have.lengthOf(0);
    wrapper
      .find(Button)
      .at(4)
      .simulate('click');
    expect(
      wrapper
        .find(Button)
        .at(4)
        .prop('value')
    ).to.equal('7');
    expect(wrapper.state().calculateString).to.have.lengthOf(1);
    const expectArray = ['7'];
    expect(wrapper.state().calculateString).to.eql(expectArray);
  });
  it('should evaluate the calcultion string and return the updated result', () => {
    const wrapper = mount(<App />);
    wrapper
      .find(Button)
      .at(4)
      .simulate('click');
    wrapper
      .find(Button)
      .at(1)
      .simulate('click');
    wrapper
      .find(Button)
      .at(5)
      .simulate('click');

    expect(wrapper.state().calculateString).to.have.lengthOf(3);
    const expectArray = ['7', '/', '8'];
    expect(wrapper.state().calculateString).to.eql(expectArray);
  });
  it('should be possible to type you ecuation as well', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('div')
      .at(0)
      .simulate('click');
    wrapper
      .find('div')
      .at(0)
      .simulate('keydown', { key: '3', keyCode: 99, which: 99 });
    expect(wrapper.state().calculateString).to.have.lengthOf(1);
  });
});
