import React from "react";
import "./component/bottom.nav.css";
import { NavLink } from "react-router-dom";
export const BottomNav = () => {
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
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt="explore"
            src={require("../../../assets/navigation/explore.svg").default}
          />
          <h3 className="navtitle">Explore</h3>
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
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt="explore"
            src={require("../../../assets/navigation/chat.svg").default}
          />
          <h3 className="navtitle">Chat</h3>
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
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt="explore"
            src={require("../../../assets/navigation/sell.svg").default}
          />
          <h3 className="navtitle">Sell</h3>
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
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt="explore"
            src={require("../../../assets/navigation/catogery.svg").default}
          />
          <h3 className="navtitle">Catogery</h3>
        </div>
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          position: "relative",
          margin: 0,
          padding: 0,
        }}
        to="/account"
      >
        <div className="navdivision">
          <img
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt="explore"
            src={require("../../../assets/navigation/person.svg").default}
          />
          <h3 className="navtitle">Account</h3>
        </div>
      </NavLink>
    </div>
  );
};
