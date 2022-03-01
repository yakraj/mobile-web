import React, { useState, useEffect, useContext } from "react";
import { Topbar } from "./../../components/global/topbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
import { cnfOTP } from "../../services/components/user.service";
export const VerifyOTP = () => {
  const navigate = useNavigate();

  const { registermobileNumber, Time } = useContext(UserContext);
  const [verify, setverify] = useState(false);
  const [inputotp, setinputotp] = useState("");
  const [otperror, setotperror] = useState();
  useEffect(() => {
    setverify(false);
  }, []);

  const VerifyFunc = () => {
    setverify(true);
    setotperror();
    cnfOTP(registermobileNumber, inputotp).then((response) => {
      if (response) {
        setverify(false);
        if (response === true) {
          navigate("/register-user");
        } else {
          setotperror(response);
        }
      } else {
        setverify(false);
        setotperror("Incorrect OTP.");
      }
    });
  };
  return (
    <>
      <Topbar title="Create Account" />
      <div className="login-container">
        <div className="login-content">
          <h2>Verify OTP</h2>
          <input
            onChange={(e) => setinputotp(e.target.value)}
            type="text"
            placeholder="OTP"
          />
          {Time > 0 && !otperror && (
            <h3 style={{ margin: 0, color: "grey" }}>{Time}</h3>
          )}
          {Time < 1 && !otperror && (
            <h3 style={{ margin: 0, color: "blue" }}>Resend OTP</h3>
          )}
          {otperror && (
            <p style={{ color: "red" }}>
              {otperror}
              <strong style={{ color: "blue", marginLeft: "5px" }}>
                Resend
              </strong>
            </p>
          )}
          {/* <Link
            style={{ textDecoration: "none", width: "100%" }}
            to="/register-user"
          > */}
          <div onClick={() => VerifyFunc()} className="login-button">
            Verify
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
