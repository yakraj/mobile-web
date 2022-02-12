import React from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
export const Topbar = ({ title, bcC, logout }) => {
  const navigate = useNavigate();
  return (
    <div style={{ background: bcC ? bcC : "#84a3a090" }} className="topbar">
      {/* this is leftside */}
      <div className="topbarleft">
        <img
          onClick={() => {
            navigate(-1);
          }}
          alt="return"
          src={require("../../../assets/icon/back.png")}
          width="30px"
          height="30px"
        />
        <h1>{title}</h1>
      </div>
      {logout && (
        <img
          alt="log out"
          style={{ filter: "invert(50%)" }}
          src={require("../../../assets/icon/logout.svg").default}
        />
      )}
    </div>
  );
};
