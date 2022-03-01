import React, { useState, useEffect, useContext } from "react";
import "./component/bottom.nav.css";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";

export const BottomNav = () => {
  const { signedin } = useContext(UserContext);

  const [currentpath, setcurrentpath] = useState("");
  const location = useLocation();
  useEffect(() => {
    setcurrentpath(location.pathname);
  });
  return (
    <div id="bottomTab">
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to="/"
      >
        <div className="navdivision">
          <img
            style={{
              height: "1.5rem",
              width: "1.5rem",
              filter:
                currentpath === "/" || currentpath === "/search"
                  ? "invert(70%) sepia(1) saturate(70) hue-rotate(14deg) brightness(1) contrast(1)"
                  : "none",
            }}
            alt="explore"
            src={require("../../../assets/navigation/explore.svg").default}
          />
          <h3
            style={{
              color:
                currentpath === "/" || currentpath === "/search"
                  ? "tomato"
                  : "grey",
            }}
            className="navtitle"
          >
            Explore
          </h3>
        </div>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to="/chatarchive"
      >
        <div className="navdivision">
          <img
            style={{
              height: "1.5rem",
              width: "1.5rem",
              filter:
                currentpath === "/chatarchive"
                  ? "invert(70%) sepia(1) saturate(70) hue-rotate(14deg) brightness(1) contrast(1)"
                  : "none",
            }}
            alt="explore"
            src={require("../../../assets/navigation/chat.svg").default}
          />
          <h3
            style={{ color: currentpath === "/chatarchive" && "tomato" }}
            className="navtitle"
          >
            Chat
          </h3>
        </div>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to="/sell-seco-catogery"
      >
        <div className="navdivision">
          <img
            style={{
              height: "1.5rem",
              width: "1.5rem",
              filter:
                currentpath === "/sell-seco-catogery" ||
                currentpath === "/sell-sub-catogery" ||
                currentpath === "/important-info" ||
                currentpath === "/upload-images" ||
                currentpath === "/personal-info"
                  ? "invert(70%) sepia(1) saturate(70) hue-rotate(14deg) brightness(1) contrast(1)"
                  : "none",
            }}
            alt="explore"
            src={require("../../../assets/navigation/sell.svg").default}
          />
          <h3
            style={{
              color:
                currentpath === "/sell-seco-catogery" ||
                currentpath === "/sell-sub-catogery" ||
                currentpath === "/important-info" ||
                currentpath === "/upload-images" ||
                currentpath === "/personal-info"
                  ? "tomato"
                  : "grey",
            }}
            className="navtitle"
          >
            Sell
          </h3>
        </div>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to="/catogeryfirst"
      >
        <div className="navdivision">
          <img
            style={{
              height: "1.5rem",
              width: "1.5rem",
              filter:
                currentpath === "/catogeryfirst" ||
                currentpath === "/second-cato" ||
                currentpath === "/sub-catogery"
                  ? "invert(70%) sepia(1) saturate(70) hue-rotate(14deg) brightness(1) contrast(1)"
                  : "none",
            }}
            alt="explore"
            src={require("../../../assets/navigation/catogery.svg").default}
          />
          <h3
            style={{
              color:
                currentpath === "/catogeryfirst" ||
                currentpath === "/second-cato" ||
                currentpath === "/sub-catogery"
                  ? "tomato"
                  : "grey",
            }}
            className="navtitle"
          >
            Catogery
          </h3>
        </div>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to={signedin ? "/account" : "/login-user"}
      >
        <div className="navdivision">
          <img
            style={{
              height: "1.5rem",
              width: "1.5rem",
              filter:
                currentpath === "/account" ||
                currentpath === "/editprofile" ||
                currentpath === "/updatelocation" ||
                currentpath === "/login-user" ||
                currentpath === "/create-account" ||
                currentpath === "/verify-otp" ||
                currentpath === "/register-user" ||
                currentpath === "/usermyfavourite" ||
                currentpath === "/usermyads"
                  ? "invert(70%) sepia(1) saturate(70) hue-rotate(14deg) brightness(1) contrast(1)"
                  : "none",
            }}
            alt="explore"
            src={require("../../../assets/navigation/person.svg").default}
          />
          <h3
            style={{
              color:
                currentpath === "/account" ||
                currentpath === "/editprofile" ||
                currentpath === "/updatelocation" ||
                currentpath === "/login-user" ||
                currentpath === "/create-account" ||
                currentpath === "/verify-otp" ||
                currentpath === "/register-user" ||
                currentpath === "/usermyfavourite" ||
                currentpath === "/usermyads"
                  ? "tomato"
                  : "grey",
            }}
            className="navtitle"
          >
            Account
          </h3>
        </div>
      </NavLink>
    </div>
  );
};
