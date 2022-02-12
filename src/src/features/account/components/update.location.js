import React from "react";
import "./updatelocation.css";
import { Topbar } from "./../../../components/global/topbar";

export const UpdateLocation = () => {
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
          placeholder="Sahare Nepal"
        />
        {/* location reccomendation */}
        <div>
          <div class="location-update-reccomendation">
            <img
              height="25px"
              width="25px"
              className="blackblue"
              alt="my location"
              src={require("../../../../assets/icon/location.png")}
            />
            Kohalpur ,nepal
          </div>
          <div class="location-update-reccomendation">
            <img
              height="25px"
              width="25px"
              className="blackblue"
              alt="my location"
              src={require("../../../../assets/icon/location.png")}
            />
            Kohalpur ,nepal
          </div>
          <div class="location-update-reccomendation">
            <img
              height="25px"
              width="25px"
              className="blackblue"
              alt="my location"
              src={require("../../../../assets/icon/location.png")}
            />
            Kohalpur ,nepal
          </div>
        </div>
        <div className="location-map-container" />
        <div className="update-location-button">Update Location</div>
      </div>
    </>
  );
};
