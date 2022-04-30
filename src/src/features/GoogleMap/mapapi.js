import React, { useContext } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { UserContext } from "../../services/user.contex";
export const Gmap = () => {
  const { lattitude, longitude } = useContext(UserContext);

  const Map = () => {
    return (
      <GoogleMap
        mapTypeId="satellite"
        defaultZoom={18}
        defaultCenter={{
          lat: lattitude ? parseFloat(lattitude) : 28.601789,
          lng: longitude ? parseFloat(longitude) : 81.600906,
        }}
      >
        <Marker
          position={{
            lat: lattitude && parseFloat(lattitude),
            lng: longitude && parseFloat(longitude),
          }}
        />
      </GoogleMap>
    );
  };
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD-Fh1LhCtCgcsv_HWERqm4abtYpScMigs`}
      loadingElement={<div style={{ height: "100%", width: "100%" }} />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
};
