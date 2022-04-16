import React, { useContext } from "react";
import "./component/toplanding.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../services/user.contex";
export const TopLanding = (props) => {
  const { searchaddressName } = useContext(UserContext);

  return (
    <>
      <div className="toplandingmain">
        <img
          alt="branding"
          style={{ width: "75px", height: "40px" }}
          src={require("../../../assets/netflix.png")}
        />
        {/* antoher for location */}
        {searchaddressName && (
          <Link
            to="/updatelocation"
            style={{ width: "100%", textDecoration: "none" }}
          >
            <div className="location-info">
              <img
                className="blackblue"
                alt="location expand"
                style={{ height: "22px", width: "22px", marginRight: "5px" }}
                src={require("../../../assets/icon/location.png")}
              />
              <p style={{ color: "blue" }}>{searchaddressName}</p>
              <img
                className="blackblue"
                alt="location expand"
                style={{ height: "20px", width: "20px", marginLeft: "5px" }}
                src={require("../../../assets/icon/expand.png")}
              />
            </div>
          </Link>
        )}
      </div>
      <Link to="/search">
        <div className="search-container">
          <img
            alt="search bar"
            style={{ width: "95%", marginLeft: "5px" }}
            src={require("../../../assets/search.png")}
          />
        </div>
      </Link>
    </>
  );
};
