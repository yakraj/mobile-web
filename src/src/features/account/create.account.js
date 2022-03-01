import React, { useContext, useEffect } from "react";
import { Topbar } from "./../../components/global/topbar";
import { Link } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
import {
  SendOTP,
  NumberExistance,
} from "./../../services/components/user.service";

export const CreateAccount = () => {
  const {
    setregistermobileNumber,
    registermobileNumber,
    setmessageExi,
    messageExi,
    StartOtpTimer,
    setnumberExiLoadi,
    Time,
  } = useContext(UserContext);
  useEffect(() => {
    setmessageExi(true);
  }, [setmessageExi]);
  const naviFunc = () => {
    Time > 0
      ? alert(
          "A Otp generation progress is already in work. wait " +
            Time +
            " second"
        )
      : SendOTP(registermobileNumber)
          .then((response) => {
            if (response === "successfully send otp") {
              StartOtpTimer();
              // navigation.navigate("confirm-otp");
            }
          })
          .catch((err) => {
            alert("Something went wrong", "Please try again !");
          });
  };

  if (registermobileNumber.length === 10) {
    NumberExistance(registermobileNumber).then((response) => {
      setmessageExi(response);
      setnumberExiLoadi(false);
      setnumberExiLoadi(false);
    });
  }

  return (
    <>
      <Topbar title="Create Account" />
      <div className="login-container">
        <div className="login-content">
          <h2>Generate OTP</h2>
          <input
            value={registermobileNumber}
            maxlength="10"
            onChange={(e) => setregistermobileNumber(e.target.value)}
            type="text"
            placeholder="Mobile Number"
          />
          {messageExi
            ? registermobileNumber.length === 10 && (
                <p style={{ color: "red", fontSize: "1rem" }}>
                  This number Already exists.
                  <Link to="/login-user">
                    <strong style={{ marginLeft: "5px" }}>Log In</strong>
                  </Link>
                </p>
              )
            : null}

          <Link
            style={{ textDecoration: "none", width: "100%" }}
            to={messageExi ? "/create-account" : "/verify-otp"}
          >
            <div
              onClick={() => !messageExi && naviFunc()}
              style={{ opacity: messageExi ? "0.5" : "1" }}
              className="login-button"
            >
              Generate OTP
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
