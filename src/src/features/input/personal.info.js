import React, { useState } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./personalinfo.css";
import { Link } from "react-router-dom";
export const PersonalInfo = () => {
  const [switchtoggle, setswitchtoggle] = useState(false);
  return (
    <>
      <Topbar title="Personal Information" />
      <div className="personal-information-container">
        <div className="person-info">
          <div className="person-icon" />
          <div className="person-info-right">
            <h4>Your name on Ad.</h4>
            <h3>Tulsi Pariyar</h3>
          </div>
        </div>
        <div className="phone-number-permission">
          <h4>Allow people to call you for this Ad.</h4>
          <div
            style={{ justifyContent: switchtoggle ? "flex-end" : "flex-start" }}
            onClick={() => setswitchtoggle(!switchtoggle)}
            className="switch-button"
          >
            <div />
          </div>
        </div>
        <div className="phone-Number-show-container">
          <h2>Phone:</h2>
          <input type="text" value="7709543082" />
        </div>
        <div className="location-search-container">
          <div className="location-input-sec">
            <input type="text" placeholder="sahare, nepal" />
            <img
              alt="my-location"
              src={require("../../../assets/icon/my-location.png")}
            />
          </div>
          <div className="location-reccomendation-container">
            <img
              className="blackblue"
              alt="location"
              src={require("../../../assets/icon/location.png")}
            />
            Kohalpur Nepal
          </div>
          <img
            alt="locationimage"
            src={require("../../../assets/mapbox.png")}
          />
        </div>
        <Link style={{ textDecoration: "none" }} to="/personal-info">
          <div
            className=" next-button-properties"
            // tblC={bg.green}
            touchable
            width="100%"
            padd={10}
            // bcC={bg.skyblue}
            border="1px grey"
            borR={5}
            marT={10}
          >
            <h3 size={25} weight="bold">
              Submit
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};
