import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App.jsx';
import Buttons from '../Buttons.jsx';
import Cards from '../Cards.jsx';

Enzyme.configure({ 'adapter': new Adapter() });

describe('App', () => {
  it('renders a single App element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('App').exists()).toEqual(true);
  });
  it('renders a Buttons component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Buttons').exists()).toEqual(true);
  });
  it('renders a Cards component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Cards').exists()).toEqual(true);
  });
});