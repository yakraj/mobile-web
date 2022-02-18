import React from "react";
import "./loginuser.css";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";

export const LoginUser = () => {
  return (
    <>
      <Topbar title="Log In" />
      <div className="login-container">
        <div className="login-content">
          <h2>Neplx</h2>
          <input type="text" placeholder="mobile" />
          <input type="text" placeholder="password" />
          {/* <p style={{ color: "red" }}>errors will be display here</p> */}
          <div className="login-button">Log In</div>
          <Link style={{ textDecoration: "none" }} to="/create-account">
            <p
              className="create-account"
              style={{ color: "blue", marginTop: "1rem", fontSize: "1rem" }}
            >
              Create an account
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
