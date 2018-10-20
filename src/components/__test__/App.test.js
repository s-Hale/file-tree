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

describe('Buttons', () => {
  it('renders three buttons', () => {
    const wrapper = shallow(<Buttons />);
    expect(wrapper.find('button')).toHaveLength(3);
  })
})

describe('Cards', () => {
  let props;
  beforeEach(() => {
    props = {
     'data':[{
        name: "testdata",
        starRating: 5,
        facilities: ["test", "test"]},
        {
        name: "testdata",
        starRating: 5,
        facilities: ["test", "test"]
      }]
    };
  });
  it('renders a card for each result in state', () => {
    const wrapper = shallow(<Cards {...props} />);
    expect(wrapper.find('.card')).toHaveLength(2);
  })
});