import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App.js';
import Buttons from '../Buttons.jsx';

Enzyme.configure({ 'adapter': new Adapter() });

describe('App', () => {
  it('renders a single App element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('App').exists()).toEqual(true);
  });
});

describe('Buttons', () => {
  it('renders a Buttons component', () => {
    const wrapper = mount(<Buttons />);
    expect(wrapper.find('Buttons').exists()).toEqual(true);
  });
  it('renders three buttons', () => {
    const wrapper = shallow(<Buttons />);
    expect(wrapper.find('button')).toHaveLength(3);
  })
});