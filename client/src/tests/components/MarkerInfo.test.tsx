import React from 'react'; 
import { shallow } from 'enzyme';

import MarkerInfo from '../../components/MarkerInfo';
import * as Models from './../../models/index';
import * as Fixtures from './../fixtures/index';

const defaultProps = {
  data: [],
  showInfoWindow: ''

}
const defaultState = {
  data: [Fixtures.DefaultState],
}

it('Marker renders', async () => {
  const wrapper = await shallow(<MarkerInfo {...defaultProps}/>);
  wrapper.setState({ ...defaultState})

  expect(wrapper.find('.Equipment').exists()).toBe(true);
});

it('Has one Marker', async () => {
  const wrapper = await shallow(<MarkerInfo {...defaultProps}/>);

  expect(wrapper.find('.Equipment')).toHaveLength(1);
});
