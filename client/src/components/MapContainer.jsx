import React, { Component } from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api'

import Marker from './Marker';

export default class MapContainer extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyCB_hwVb2wPwbsIzVengN57jZSLi3EWAKw'
        onError={() => console.log('error')}
      >
        <GoogleMap
          isMarkerShown
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
          google={this.props.google}
          id="equipmentMap"
        >
          <Marker />
      </GoogleMap>
    </LoadScript>  
    )
  }
} 