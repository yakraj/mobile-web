import React from "react";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
  return (
    <>
      <Topbar title="Create Account" />
      <div className="login-container">
        <div className="login-content">
          <h2>Generate OTP</h2>
          <input type="text" placeholder="Mobile Number" />
          {/* <p style={{ color: "red" }}>
            This number Already exists.
            <Link to="/login-user">
              <strong style={{ marginLeft: "5px" }}>Log In</strong>
            </Link>
          </p> */}
          <Link
            style={{ textDecoration: "none", width: "100%" }}
            to="/verify-otp"
          >
            <div className="login-button">Generate OTP</div>
          </Link>
        </div>
      </div>
    </>
  );
};
