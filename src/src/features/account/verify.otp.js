import React from "react";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";

export const VerifyOTP = () => {
  return (
    <>
      <Topbar title="Create Account" />
      <div className="login-container">
        <div className="login-content">
          <h2>Verify OTP</h2>
          <input type="text" placeholder="OTP" />
          <p style={{ color: "red" }}>
            Incorrect OTP.{" "}
            <strong style={{ color: "blue", marginLeft: "5px" }}>Resend</strong>
          </p>
          <Link
            style={{ textDecoration: "none", width: "100%" }}
            to="/register-user"
          >
            <div className="login-button">Verify</div>
          </Link>
        </div>
      </div>
    </>
  );
};
