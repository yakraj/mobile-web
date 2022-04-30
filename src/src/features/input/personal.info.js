import React, { useState, useContext, useEffect } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./personalinfo.css";
import { Link, useNavigate } from "react-router-dom";
import { InputSellContext } from "./../../services/sell.input.context";
import { UserContext } from "./../../services/user.contex";
import { SearchContext } from "./../../services/search.context";
import { Gmap } from "../GoogleMap/mapapi";

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

  const {
    usercrd,
    signedin,
    searchaddressName,
    lattitude,
    longitude,
    setsearchaddressName,
    GetAddress,
  } = useContext(UserContext);
  const {
    GetTextLocation,
    LocationValue,
    setLocationValue,
    RecentautocompleteKey,
    AddressAutocomplete,
    autocomplete,
  } = useContext(SearchContext);
  const SubmitButton = () => {
    signedin
      ? UploadAdThumbnail(usercrd, lattitude, longitude, searchaddressName)
      : navigate("/user-login");
  };
  const CurrentLocationReq = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      GetTextLocation([position.coords.latitude, position.coords.longitude]);
    });
  };
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

  useEffect(() => {
    setLocationValue(searchaddressName);
  }, [searchaddressName, setLocationValue]);

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
            <input
              value={LocationValue}
              onChange={(e) => setLocationValue(e.target.value)}
              type="text"
              placeholder="sahare, nepal"
            />
            <img
              alt="my-location"
              onClick={() => {
                CurrentLocationReq();
              }}
              src={require("../../../assets/icon/my-location.png")}
            />
          </div>
          {autocomplete.map((x, i) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLocationValue(x.description);
                  setsearchaddressName(x.description);
                  GetAddress(x.place_id);
                  // textinput.current.focus();
                }}
                key={i}
                className="location-reccomendation-container"
              >
                <img
                  className="blackblue"
                  alt="location"
                  src={require("../../../assets/icon/location.png")}
                />
                {x.description}
              </div>
            );
          })}
          <div style={{ height: "500px", width: "100%" }}>
            <Gmap lattitude={lattitude} longitude={longitude} />
          </div>
        </div>

        <div
          className=" next-button-properties"
          // tblC={bg.green}
          onClick={() => {
            SubmitButton();
            window.alert(
              "We will let you know soon once your,searchaddressName ad will be published."
            );
            navigate("/");
          }}
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
