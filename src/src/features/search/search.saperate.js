import React, { useState, useRef, useEffect, useContext } from "react";
import "./component/search.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./../../services/search.context";
import { UserContext } from "./../../services/user.contex";
export const SearchScreen = () => {
  const {
    autosuggest,
    CacheKeywords,
    setgottenAds,
    subCatogeryreco,
    getSuggestions,
    searchKeyword,
    setSearchKeyword,
    ReqAds,
    LocationValue,
    setLocationValue,
    AddressAutocomplete,
    autocomplete,
    setautocomplete,
    RecentautocompleteKey,
    GetTextLocation,
    loadingautocomplete,
    setStatus,
    setdata5km,
    setdata10km,
    setdata20km,
    setdata50km,
    setin5km,
    setin10km,
    setin20km,
    setin50km,
  } = useContext(SearchContext);
  const {
    setsearchaddressName,
    searchaddressName,
    GetAddress,
    loadingmyaddress,
    lattitude,
    longitude,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const [inputfocus, setinputfocus] = useState(false);
  const [searchval, setsearchval] = useState("");
  const [locationfocus, setlocationfocus] = useState(false);
  const [locsearchval, setlocsearchval] = useState(
    searchKeyword ? searchKeyword : ""
  );
  const searchInput = useRef();
  const locationref = useRef();
  const SearchSubmit = (data) => {
    if (data.length >= 3) {
      setStatus([]);
      setdata5km("");
      setdata10km("");
      setdata20km("");
      setdata50km("");
      setin5km([]);
      setin10km([]);
      setin20km([]);
      setin50km([]);
      ReqAds(data, lattitude, longitude, 5, 0);
    }
    setSearchKeyword(data);
    data.length >= 3
      ? navigate("/search-result")
      : window.alert("Please enter at lease 3 character");
  };

  useEffect(() => {
    searchInput.current.addEventListener("keyup", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        SearchSubmit(searchInput.current.value);
      }
    });
  }, []);
  useEffect(() => {
    const delayAutosuggestion = setTimeout(() => {
      if (LocationValue.length > 1) {
        locationfocus &&
          searchaddressName !== LocationValue &&
          RecentautocompleteKey !== LocationValue &&
          AddressAutocomplete(LocationValue);
      }
    }, 1000);

    return () => clearTimeout(delayAutosuggestion);
  }, [LocationValue, locationfocus]);
  useEffect(() => {
    setLocationValue(searchaddressName);
  }, [searchaddressName, setLocationValue]);

  useEffect(() => {
    searchInput.current.focus();
  }, [searchInput]);

  const CurrentLocationReq = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      GetTextLocation([position.coords.latitude, position.coords.longitude]);
    });
  };

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
          ref={searchInput}
          value={searchKeyword}
          onFocus={() => {
            setinputfocus(true);
            searchInput.current.select();
          }}
          onBlur={() => setinputfocus(false)}
          onChange={(e) => setSearchKeyword(e.target.value)}
          type="text"
          autofocus
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
            ref={locationref}
            value={LocationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            onFocus={() => {
              setlocationfocus(true);
              locationref.current.select();
            }}
            // onBlur={() => setlocationfocus(false)}
            type="search"
            placeholder="search your location"
          />
        </div>
      </div>

      {locationfocus &&
        !inputfocus &&
        (loadingautocomplete ? (
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
        ) : (
          autocomplete.map((x, i) => {
            return (
              <div className="locreccomendation">
                <div
                  onClick={() => {
                    setLocationValue(x.description);
                    setsearchaddressName(x.description);
                    GetAddress(x.place_id);
                    searchInput.current.focus();
                  }}
                  className="location-sugg"
                >
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
                  <p>{x.description}</p>
                </div>
              </div>
            );
          })
        ))}
      {/* this is for searching status */}

      {locationfocus && !inputfocus && (
        <div onClick={() => CurrentLocationReq()} className="currentlocprimary">
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
              <p>{searchaddressName}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
