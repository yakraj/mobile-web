import React from "react";
import "./component/bottom.nav.css";
import { NavLink } from "react-router-dom";
export const BottomNav = () => {
  return (
    <div id="bottomTab">
      <div className="navdivision">
        <img
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt="explore"
          src={require("../../../assets/navigation/explore.svg").default}
        />
        <h3 className="navtitle">Explore</h3>
      </div>

      <div className="navdivision">
        <img
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt="explore"
          src={require("../../../assets/navigation/chat.svg").default}
        />
        <h3 className="navtitle">Chat</h3>
      </div>
      <div className="navdivision">
        <img
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt="explore"
          src={require("../../../assets/navigation/sell.svg").default}
        />
        <h3 className="navtitle">Sell</h3>
      </div>
      <div className="navdivision">
        <img
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt="explore"
          src={require("../../../assets/navigation/catogery.svg").default}
        />
        <h3 className="navtitle">Catogery</h3>
      </div>
      <div className="navdivision">
        <img
          style={{ height: "1.5rem", width: "1.5rem" }}
          alt="explore"
          src={require("../../../assets/navigation/person.svg").default}
        />
        <h3 className="navtitle">Account</h3>
      </div>
    </div>
  );
};
