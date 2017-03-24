import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Component: Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });
});