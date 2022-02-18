import React, { useState } from "react";
import { Topbar } from "./../../components/global/topbar";
import "./register.css";
import { Link } from "react-router-dom";
export const RegisterUser = () => {
  const [imagefile, setimagefile] = useState();
  const [newpassword, setnewpassword] = useState("");
  const [focusNewpassword, setfocusnewpassword] = useState(false);

  const [confirmpassword, setconfirmpassword] = useState("");
  var hasNumber = /\d/;
  const fileSelect = (e) => {
    const { files } = e.target;
    setimagefile(URL.createObjectURL(files[0]));
  };
  console.log(newpassword === confirmpassword);
  console.log(confirmpassword);
  return (
    <>
      <Topbar title="Register" />
      <div class="register-container">
        <div
          style={{
            backgroundImage: imagefile && "url(" + imagefile + ")",
          }}
          className="userImage-register"
        >
          <input onChange={fileSelect} accept="image/*" type="file" />
        </div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <div className="register-create-password">
          <div className="create-password">Create Password</div>
          <input
            onChange={(e) => setnewpassword(e.target.value)}
            type="password"
            placeholder="New Password"
            onFocus={() => setfocusnewpassword(true)}
            onBlur={() => setfocusnewpassword(false)}
            autocomplete="off"
          />
          {focusNewpassword && (
            <div>
              <p
                style={{
                  width: "100vw",
                  color:
                    newpassword.length >= 8 && newpassword.length <= 16
                      ? "green"
                      : "red",
                  marginLeft: "-30px",
                  fontWeight: "bold",
                }}
              >
                Password should be between 8-16 characters
              </p>
              <p
                style={{
                  width: "100vw",
                  fontWeight: "bold",
                  color: hasNumber.test(newpassword) ? "green" : "red",
                }}
              >
                Password should contain Numbers.
              </p>
            </div>
          )}
          <input
            autocomplete="off"
            type="password"
            style={{
              border:
                newpassword === confirmpassword
                  ? "1px solid grey"
                  : "2px solid red",
              outline: "none",
            }}
            onChange={(e) => setconfirmpassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <Link
          style={{ textDecoration: "none", width: "80%" }}
          to="/personal-info"
        >
          <div style={{ margin: "10px" }} className=" next-button-properties">
            <h3 size={25} weight="bold">
              Submit
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};
