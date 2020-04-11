import React, { Component } from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';

import * as Models from '../models/index';

interface State {
  data: Models.MachineData[],
  showInfoWindow: string,
}

class MarkerInfo extends Component<State> {
  state = {
    data: [],
    showInfoWindow: ''
  };

  componentDidMount() {
    setInterval(() => {
      this.fetchMachineData()
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err));
    }, 10000);
  }

  fetchMachineData = async (): Promise<void> => {
    const response = await fetch('/machines');
    return response.json();
  };

  showInfoWindow = (machineId: number): void => {
    this.setState({ showInfoWindow: machineId });
  };

  isMachineInBounds = (isInBounds: boolean): string => {
    const iconColor = isInBounds ? 'blue-dot.png' : 'yellow-dot.png'
    return `http://maps.google.com/mapfiles/ms/icons/${iconColor}`;
  };

  render() {
    return (
      <div className='Equipment'>
      {this.state.data.map((machine: Models.MachineData) => {
        return (
          <Marker
            key={machine.id}
            position={{ lat: machine.location.latitude, lng: machine.location.longitude }}
            onClick={() => this.showInfoWindow(machine.id)}
            title={`Serial #${machine.serial_number}\nIn bounds: ${machine.metrics.in_bounds.toString()}`}
            icon={this.isMachineInBounds(machine.metrics.in_bounds)}
          >
            {parseInt(this.state.showInfoWindow, 10) === machine.id &&
              <InfoWindow position={{ lat: machine.location.latitude, lng: machine.location.longitude }}>
                <div style={{ width: '200px', height: '100%', textAlign: 'left', fontSize: '16px' }}>
                  <ul style={{ listStyleType: 'none', listStylePosition: 'outside', paddingInlineStart: '5px' }}>
                    <li>Model: <strong>{machine.model.make}</strong></li>
                    <li>Category: <strong>{machine.model.category}</strong></li>
                    <li>Make: <strong>{machine.model.make}</strong></li>
                    <li>Manufacture_year: <strong>{machine.model.manufacture_year}</strong></li>
                    <li>Tank_capacity: <strong>{machine.model.tank_capacity}</strong></li>
                    <li>Type: <strong>{machine.model.type}</strong></li>
                    <li>Serial Number: <strong>{machine.serial_number}</strong></li>
                    <li>Machine ID: <strong>{machine.id}</strong></li>
                    <li>Def Remaining: <strong>{machine.metrics.def_remaining}</strong></li>
                    <li>Engine Status: <strong>{machine.metrics.engine_status}</strong></li>
                    <li>Fuel Remaining: <strong>{machine.metrics.fuel_remaining}</strong></li>
                    <li>Last Activiy: <strong>{machine.metrics.last_activity}</strong></li>
                    <li>In Bounds: <strong>{machine.metrics.in_bounds.toString()}</strong></li>
                  </ul>
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      })}
      </div>
    )
  }     
}

export default MarkerInfo;