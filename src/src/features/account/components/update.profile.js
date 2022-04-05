import React, { useContext, useState, useEffect } from "react";
import { Topbar } from "./../../../components/global/topbar";
import "./updateprofile.css";
import imageCompression from "browser-image-compression";
import { Link } from "react-router-dom";
import { host } from "../../../services/host.network";

import { UserContext } from "./../../../services/user.contex";
export const EditProfile = () => {
  const { usercrd, Updateavatar, UpdateName, UpdateMobile } =
    useContext(UserContext);

  const [icon, seticon] = useState();
  useEffect(() => {
    seticon("");
  }, [seticon]);
  async function handleImageUpload(files) {
    const imageFile = files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 460,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      Updateavatar(compressedFile, usercrd.username);
      // setImages(compressedFile);
    } catch (error) {
      console.log(error);
    }
  }
  const fileSelect = (e) => {
    const { files } = e.target;
    console.log(files[0]);
    handleImageUpload(files);
    seticon(URL.createObjectURL(files[0]));
  };
  const [firstname, setfirstname] = useState(usercrd.firstname);
  const [lastname, setlastname] = useState(usercrd.lastname);
  const [mobile, setmobile] = useState(usercrd.mobile);
  return (
    <>
      <Topbar bcC="#AAF3F5" title="Edit Profile" />
      {/* profile image change container  */}
      <div className="profile-change-container">
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${
              icon ? icon : host + "/useravatar/" + usercrd.image
            })`,
          }}
        >
          <input
            onChange={fileSelect}
            style={{
              opacity: "0",
              height: "100%",
              width: "100%",
              background: "red",
            }}
            type="file"
            accept="image/*"
          />
        </div>
        <div className="profile-image-edit-pen">
          <img
            height="20px"
            width="20px"
            alt="update-pen"
            src={require("../../../../assets/icon/pen.png")}
          />
        </div>
      </div>
      {/* user name change container */}
      <div className="user-name-update">
        <h4>First Name</h4>
        <input
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          type="text"
        />
        <h4>Last Name</h4>
        <input
          defaultValue={lastname}
          onChange={(e) => setlastname(e.target.value)}
          type="text"
        />
      </div>
      {/* update names button */}
      <div class="update-button">
        <div
          onClick={() => {
            UpdateName(firstname, lastname, usercrd.username);

            window.alert("Your Name will be updated as ");
            setfirstname("");
            setlastname("");
          }}
        >
          Update Details
        </div>
      </div>
      {/* update Mobile number */}
      <div class="update-user-mobile">
        <div class="contact-details-edit">Contact Details</div>
        <div class="contact-details-mobile-container">
          <input
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            type="text"
          />
          <div class="update-button">
            <div
              onClick={() => {
                UpdateMobile(mobile, usercrd.username);
                window.alert("Your mobile number will be updated very sortly.");
              }}
              touchab
            >
              Update
            </div>
          </div>
        </div>
      </div>
      {/* update location */}
      <div class="update-location-container">
        <div class="contact-details-edit">Location</div>
        <Link style={{ textDecoration: "none" }} to="/updatelocation">
          <div class="update-button">
            <div
              style={{
                background: "red",
                boxSizing: "border-box",
                width: "100%",
                textAlign: "center",
                margin: "10px",
                padding: "10px",
                fontSize: "18px",
              }}
            >
              Update Location
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
