import React from 'react';
import { shallow } from 'enzyme';

import Marker from './components/Marker';

const defaultState = {
  data: [
    {
      "id": 23,
      "location": {
        "altitude": 0,
        "latitude": 51.47679,
        "longitude": 7.097966
      },
      "metrics": {
        "def_remaining": null,
        "engine_status": 0,
        "fuel_remaining": 32,
        "last_activity": "2019-12-10T00:00:00.000",
        "in_bounds": true
      },
      "model": {
        "category": "earth_moving",
        "make": "liebherr",
        "manufacture_year": 2016,
        "model": "A 924:1206",
        "tank_capacity": 0,
        "type": "wheeled_excavator"
      },
      "serial_number": "768403"
    }
  ]
}

it('Marker renders', async () => {
  const wrapper = await shallow(<Marker />);
  wrapper.setState({ ...defaultState})

  expect(wrapper.find('.Equipment').exists()).toBe(true);
});

it('Has one Marker', async () => {
  const wrapper = await shallow(<Marker />);
  wrapper.setState({ ...defaultState });

  expect(wrapper.find('.Equipment__Marker').exists()).toBe(true);
  expect(wrapper.find('.Equipment__Marker')).toHaveLength(1);
});
