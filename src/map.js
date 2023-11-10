// Map.js
import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}
    defaultZoom={12}
  >
    <Marker position={{ lat: YOUR_MARKER_LAT, lng: YOUR_MARKER_LNG }} />
  </GoogleMap>
));

export default Map;
