import React, { Component } from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

import MarkerInfo from './MarkerInfo';
import { API_KEY } from '../config';

export default class MapContainer extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={API_KEY}
        onError={() => console.log('error')}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "100vh",
            width: "100%"
          }}
          center={{
            lat: 48.142267,
            lng: 11.523176
          }}
          mapTypeId='satellite'
          zoom={17}
          id="equipmentMap"
        >
          <MarkerInfo data={[]} showInfoWindow=''/>
      </GoogleMap>
    </LoadScript>  
    )
  }
} 