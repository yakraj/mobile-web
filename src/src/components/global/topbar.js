import React, { useContext } from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";

export const Topbar = ({ title, bcC, logout }) => {
  const navigate = useNavigate();
  const { setusercrd, setSignedin } = useContext(UserContext);
  const AskLogout = () => {
    const deleteImage = window.confirm(
      "Are you sure to Log Out your account ?"
    );
    if (deleteImage) {
      setusercrd("");
      setSignedin(false);
      navigate("/login-user");
    } else {
      // console.log("i can not log out");
    }
  };
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
        <div onClick={() => AskLogout()}>
          <img
            alt="log out"
            style={{ filter: "invert(50%)" }}
            src={require("../../../assets/icon/logout.svg").default}
          />
        </div>
      )}
    </div>
  );
};
