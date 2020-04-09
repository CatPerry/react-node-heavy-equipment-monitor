import React from 'react';
import { shallow } from 'enzyme';

import MapContainer from './components/MapContainer';

it('MapContainer renders', () => {
  const wrapper = shallow(<MapContainer />);

  expect(wrapper.exists()).toBe(true);
});
