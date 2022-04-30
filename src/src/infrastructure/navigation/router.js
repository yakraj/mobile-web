import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BottomNav } from "../../features/bottomnav/bottom.nav";

import { Explore } from "./../../features/explore/screen.explore";
import { SearchScreen } from "./../../features/search/search.saperate";
import { ProductView } from "./../../features/product/product.view";
import { ChatArchive } from "../../features/chatting/chatarchive";
import { ChattingUI } from "../../features/chat/chattingui";
import { Account } from "../../features/account/account";
import { EditProfile } from "./../../features/account/components/update.profile";
import { UpdateLocation } from "./../../features/account/components/update.location";
import { UserMyads } from "./../../features/account/myads";
import { UserMyfavorite } from "./../../features/account/favourites";
import { FirstCat } from "./../../features/catogery/firstCat.component";
import { SecondCat } from "./../../features/catogery/second.component";
import { SubCatogery } from "./../../features/catogery/subcatogery/subcatogery.component";
import { SellSecondCat } from "./../../features/catogery/sellCatogery/second.component";
import { SellSubCatogery } from "./../../features/catogery/sellCatogery/subcatogery/subcatogery.component";
import { InputSell } from "../../features/input/properties.sell";
import { InputImportantInfo } from "./../../features/input/important.info";
import { UploadImages } from "./../../features/input/upload.image";
import { PersonalInfo } from "./../../features/input/personal.info";
import { LoginUser } from "../../features/account/login.user";
import { CreateAccount } from "../../features/account/create.account";
import { VerifyOTP } from "../../features/account/verify.otp";
import { RegisterUser } from "../../features/account/register.user";
import { SearchResult } from "./../../features/searchresult/search.result";
import { UserContext } from "./../../services/user.contex";
import { SearchContext } from "./../../services/search.context";
import { Gmap } from "./../../features/GoogleMap/mapapi";
import { useNavigate } from "react-router-dom";
export const RouterApp = () => {
  const navigate = useNavigate();
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
    signedin,
    usercrd,
  } = useContext(UserContext);

  const LocPopup = () => {
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
    const CurrentLocationReq = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        GetTextLocation([position.coords.latitude, position.coords.longitude]);
      });
    };

    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            width="30%"
            alt="handshake"
            src={require("../../../assets/location.svg").default}
          />
          <h3>Where do you want to sell/Buy.</h3>
        </div>
        <div style={{ padding: "10px", boxSizing: "border-box" }}>
          <div
            onClick={() => CurrentLocationReq()}
            className="use-my-loction-button"
          >
            <img
              height="30px"
              width="30px"
              style={{ filter: "invert(1)", marginRight: "10px" }}
              alt="my location"
              src={require("../../../assets/icon/my-location.png")}
            />
            use my current location
          </div>
          <input
            className="location-update-input"
            type="text"
            value={LocationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="Your city/locality"
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
                    src={require("../../../assets/icon/location.png")}
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
            <Gmap lattitude={lattitude} longitude={longitude} />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {lattitude && longitude ? (
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Explore />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/chatarchive" element={<ChatArchive />} />
          <Route path="/chattingui" element={<ChattingUI />} />
          <Route path="/account" element={<Account />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/updatelocation" element={<UpdateLocation />} />
          <Route path="/usermyads" element={<UserMyads />} />
          <Route path="/usermyfavourite" element={<UserMyfavorite />} />
          <Route path="/catogeryfirst" element={<FirstCat />} />
          <Route path="/second-cato" element={<SecondCat />} />
          <Route path="/sub-catogery" element={<SubCatogery />} />
          <Route path="/sell-seco-catogery" element={<SellSecondCat />} />
          <Route path="/sell-sub-catogery" element={<SellSubCatogery />} />
          <Route path="/input-sell" element={<InputSell />} />
          <Route path="/important-info" element={<InputImportantInfo />} />
          <Route path="/upload-images" element={<UploadImages />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/search-result" element={<SearchResult />} />
          {/* <Route pat
h="contact" element={ <Contact/> } /> */}
        </Routes>
      ) : (
        <LocPopup />
      )}
      <BottomNav />
    </div>
  );
};
