import React from "react";
import { Topbar } from "./../../../components/global/topbar";
import Profile from "../../../../assets/profile.jpg";
import "./updateprofile.css";
import { Link } from "react-router-dom";
export const EditProfile = () => {
  return (
    <>
      <Topbar bcC="#AAF3F5" title="Edit Profile" />
      {/* profile image change container  */}
      <div className="profile-change-container">
        <div
          className="profile-image"
          style={{ backgroundImage: `url(${Profile})` }}
        />

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
        <input type="text" placeholder="Yakraj" />
        <h4>Last Name</h4>
        <input type="text" placeholder="Pariyar" />
      </div>
      {/* update names button */}
      <div class="update-button">
        <div> Update Details</div>
      </div>
      {/* update Mobile number */}
      <div class="update-user-mobile">
        <div class="contact-details-edit">Contact Details</div>
        <div class="contact-details-mobile-container">
          <input type="text" placeholder="7709543082" />
          <div class="update-button">
            <div> Update </div>
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
