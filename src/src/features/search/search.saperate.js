import React, { useState, useEffect } from "react";
import "./component/search.css";
import { useNavigate } from "react-router-dom";
export const SearchScreen = () => {
  const navigate = useNavigate();
  const [inputfocus, setinputfocus] = useState(false);
  const [searchval, setsearchval] = useState("");
  const [locationfocus, setlocationfocus] = useState(false);
  const [locsearchval, setlocsearchval] = useState("");

  return (
    <>
      <div className="searchBar">
        <img
          onClick={() => {
            navigate(-1);
          }}
          style={{ width: "7vw" }}
          alt="search-return"
          src={require("../../../assets/icon/back.png")}
        />
        <input
          value={searchval}
          onFocus={() => setinputfocus(true)}
          onBlur={() => setinputfocus(false)}
          onChange={(e) => setsearchval(e.target.value)}
          type="text"
          placeholder="search your desire"
        />
        {inputfocus && searchval.length > 0 ? (
          <img
            style={{ width: "9vw", height: "8vw" }}
            alt="search-return"
            src={require("../../../assets/icon/close.png")}
          />
        ) : (
          <img
            onClick={() => setsearchval("")}
            style={{ width: "9vw", height: "8vw" }}
            alt="search-return"
            src={require("../../../assets/icon/search.png")}
          />
        )}
      </div>
      {/* this is location part */}
      <div className="locationsearch">
        <div className="locationtype">
          <img
            className="blackblue"
            alt="mylocation"
            style={{
              width: "1.5rem",
              position: "relative",
              //   marginLeft: "100px",
            }}
            src={require("../../../assets/icon/my-location.png")}
          />
          <input
            onChange={(e) => setlocsearchval(e.target.value)}
            onFocus={() => setlocationfocus(true)}
            onBlur={() => setlocationfocus(false)}
            type="search"
            placeholder="search your location"
          />
        </div>
      </div>
      {locsearchval.length > 0 && (
        <div className="loading-loc-sugg">
          <div>
            <img
              width="30px"
              height="30px"
              alt="loading address"
              src={require("../../../assets/loading.gif")}
            />
            <p
              style={{
                fontSize: "11px",
                color: "red",
                textTransform: "capitalize",
              }}
            >
              Please try to search most relevent locationor use your current
              location
            </p>
          </div>
        </div>
      )}
      {locationfocus && !inputfocus && (
        <div className="locreccomendation">
          <div className="location-sugg">
            <img
              className="blackblue"
              alt="mylocation"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "10px",
                position: "relative",
                //   marginLeft: "100px",
              }}
              src={require("../../../assets/icon/location.png")}
            />
            <p>
              sahare camput botechaur purandhara tulsipur highway sahare nepal
            </p>
          </div>
        </div>
      )}
      {/* this is for searching status */}

      {locationfocus && (
        <div className="currentlocprimary">
          <div className="use-currentloc">
            <img
              className="blackblue"
              alt="mylocation"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "relative",
                //   marginLeft: "100px",
              }}
              src={require("../../../assets/icon/my-location.png")}
            />
            <div>
              <h3>
                Use My Current Location
                <strong
                  style={{ color: "red", marginLeft: "5px", fontWeight: 300 }}
                >
                  (Reccomended)
                </strong>
              </h3>
              <p>Sahare Nepal</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
