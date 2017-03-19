import React from 'react';
import { render } from 'enzyme';

import MyComponent from '../components/ResistanceLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<MyComponent url='#' text='Example link' />, div);
});
