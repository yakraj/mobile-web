import React, { useContext, useEffect } from "react";
import "./updatelocation.css";
import { Topbar } from "./../../../components/global/topbar";
import { useJsApiLoader } from "@react-google-maps/api";
import { SearchContext } from "../../../services/search.context";
import { UserContext } from "./../../../services/user.contex";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const UpdateLocation = () => {
  const {
    setsearchaddressName,
    searchaddressName,
    GetAddress,
    GetLocation,
    userAddresssugg,
    LoadinguserAdd,
    lattitude,
    longitude,
    setlattitude,
    setlongitude,
    UpdateAddress,
    usercrd,
  } = useContext(UserContext);

  const {
    LocationValue,
    setLocationValue,
    AddressAutocomplete,
    autocomplete,
    setautocomplete,
    RecentautocompleteKey,
    GetTextLocation,
  } = useContext(SearchContext);

  useEffect(() => {
    const delayAutosuggestion = setTimeout(() => {
      if (LocationValue.length > 1) {
        searchaddressName !== LocationValue &&
          RecentautocompleteKey !== LocationValue &&
          AddressAutocomplete(LocationValue);
      }
    }, 1000);

    return () => clearTimeout(delayAutosuggestion);
  }, [LocationValue]);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  console.log(lattitude, longitude);
  const center = {
    lat: lattitude ? parseFloat(lattitude) : 28.394345401646063,
    lng: longitude ? parseFloat(longitude) : 81.86099197715521,
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyD-Fh1LhCtCgcsv_HWERqm4abtYpScMigs",
  // });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{
          lat: lattitude ? parseFloat(lattitude) : 28.394345401646063,
          lng: longitude ? parseFloat(longitude) : 81.86099197715521,
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
    <>
      <Topbar title="Update Location" />
      <div style={{ padding: "10px", boxSizing: "border-box" }}>
        <div className="use-my-loction-button">
          <img
            height="30px"
            width="30px"
            style={{ filter: "invert(1)", marginRight: "10px" }}
            alt="my location"
            src={require("../../../../assets/icon/my-location.png")}
          />
          use my current location
        </div>
        <input
          className="location-update-input"
          type="text"
          onChange={(e) => setLocationValue(e.target.value)}
          placeholder="Sahare Nepal"
        />
        {/* location reccomendation */}
        <div>
          {autocomplete.map((x, i) => {
            return (
              <div
                onClick={() => {
                  setLocationValue(x.description);
                  setsearchaddressName(x.description);
                  GetAddress(x.place_id);
                  // textinput.current.focus();
                }}
                key={i}
                className="location-update-reccomendation"
              >
                <img
                  height="25px"
                  width="25px"
                  className="blackblue"
                  alt="my location"
                  src={require("../../../../assets/icon/location.png")}
                />
                {x.description}
              </div>
            );
          })}
        </div>
        <div
          style={{ width: "100%", height: "500px" }}
          className="location-map-container"
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD-Fh1LhCtCgcsv_HWERqm4abtYpScMigs`}
            loadingElement={<div style={{ height: "100%", width: "100%" }} />}
            containerElement={<div style={{ height: "100%", width: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
        <div className="update-location-button">Update Location</div>
      </div>
    </>
  );
};
