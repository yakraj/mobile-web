import React, { useState, useContext } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./personalinfo.css";
import { Link, useNavigate } from "react-router-dom";
import { InputSellContext } from "./../../services/sell.input.context";
import { UserContext } from "./../../services/user.contex";
export const PersonalInfo = () => {
  const navigate = useNavigate();
  const {
    NewProductAd,
    UploadAdThumbnail,
    allowMobile,
    setAllowMobile,
    MobNumber,
    setMobNumber,
  } = useContext(InputSellContext);
  const { usercrd, signedin } = useContext(UserContext);

  const SubmitButton = () => {
    signedin ? UploadAdThumbnail(usercrd) : navigate("/user-login");
  };
  console.log(MobNumber);

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
            style={{ justifyContent: allowMobile ? "flex-end" : "flex-start" }}
            onClick={() => setAllowMobile(!allowMobile)}
            className="switch-button"
          >
            <div />
          </div>
        </div>
        <div
          style={{ opacity: allowMobile ? 1 : 0.3 }}
          className="phone-Number-show-container"
        >
          <h2>Phone:</h2>
          <input
            onChange={(e) => setMobNumber(e.target.value)}
            type="text"
            value={MobNumber ? MobNumber : "+977 " + usercrd.mobile}
          />
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

        <div
          className=" next-button-properties"
          // tblC={bg.green}
          onClick={() => SubmitButton()}
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
      </div>
    </>
  );
};
