import React, { useContext } from "react";
import "./account.css";
import { Topbar } from "../../components/global/topbar";
import profile from "../../../assets/profile.jpg";
import { TwoTotab } from "./../../components/toptab/twotoptab";
import { ThreeTotab } from "../../components/toptab/toptab";
import { ProductArchive } from "./../productarchive/product.archive";
import { Link } from "react-router-dom";
import { UserContext } from "./../../services/user.contex";
import { Imagehost } from "./../../services/host.network";
export const Account = () => {
  const { usercrd, userAds, FavAds, searchaddressName } =
    useContext(UserContext);

  const NavigateIcon = ({ icon, type, route }) => {
    return (
      <Link to={`/${route}`}>
        <div className="navigate-icon">
          <img
            style={{ filter: "invert(1)" }}
            width="25px"
            height="25px"
            alt="navigate"
            src={icon}
          />
        </div>
      </Link>
    );
  };
  const UserFavourites = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive Archives={FavAds} />
      </div>
    );
  };
  const UserOwnAds = (ads) => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive Archives={userAds} deleter={true} />
      </div>
    );
  };
  const UsersoldAds = (ads) => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive
          Archives={userAds.filter((x) => x.status === "sold")}
          deleter={true}
        />
      </div>
    );
  };
  const UserOwnActiveAds = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive
          Archives={userAds.filter((x) => x.status === "active")}
          deleter={true}
          // sold
        />
      </div>
    );
  };

  const Favourites = <UserFavourites />;
  const UserAds = <UserOwnAds />;
  const UserSoldAds = <UsersoldAds />;

  const UserActiveAds = <UserOwnActiveAds />;
  const Myads = (
    <ThreeTotab
      firstTabname="All"
      secondTabname="Active"
      thirdTabname="Sold"
      firstSlideContent={UserAds}
      secondSlideContent={UserActiveAds}
      thirdSlideContent={UserSoldAds}
      screenname="accountad"
    />
  );
  return (
    <>
      <Topbar logout title="My account" bcC="rgb(69 228 233 / 46%)" />
      <div className="accountprofile">
        <div
          // `url(http://localhost:5001/uploads/${x.thumbnail})
          style={{
            backgroundImage: `url(${Imagehost + "/" + usercrd.image})`,
          }}
          className="profileImage"
        />
        {usercrd && (
          <div className="profilename">
            <h4 style={{ marginRight: "4px" }}>
              {usercrd.firstname + " " + usercrd.lastname}
            </h4>
            <h4> | {usercrd.mobile}</h4>
          </div>
        )}
        <p style={{ width: "80%", textAlign: "center" }}>
          {searchaddressName ? searchaddressName : usercrd.address}
        </p>
        <div className="edit-icon">
          <Link to="/editprofile">
            <img
              alt="edit-icon"
              src={require("../../../assets/icon/pen.png")}
            />
          </Link>
        </div>
      </div>
      {/* navigate icons */}
      <div className="navigate-container">
        <NavigateIcon
          route="usermyads"
          icon={require(`../../../assets/icon/category.svg`).default}
        />
        <NavigateIcon
          route="usermyfavourite"
          icon={require(`../../../assets/icon/heart.png`)}
        />
        <NavigateIcon
          route="account"
          icon={require(`../../../assets/icon/settings.png`)}
        />
        <NavigateIcon
          route="account"
          icon={require(`../../../assets/icon/support.svg`).default}
        />
      </div>
      <TwoTotab
        firstTabname="Favourites"
        secondTabname="My Ads"
        thirdTabname="my Ads"
        firstSlideContent={Favourites}
        secondSlideContent={Myads}
        screenname="account"
        thirdSlideContent={Favourites}
      />
    </>
  );
};
