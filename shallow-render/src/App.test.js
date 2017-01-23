import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
// import { WELCOME_MESSAGE } from './constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render with constants', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('h2').text()).toBe('Welcome to React');
});
