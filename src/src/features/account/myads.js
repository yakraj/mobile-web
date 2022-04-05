import React, { useContext } from "react";
import { Topbar } from "../../components/global/topbar";
import { ThreeTotab } from "../../components/toptab/toptab";
import { UserContext } from "../../services/user.contex";
import { ProductArchive } from "./../productarchive/product.archive";

export const UserMyads = () => {
  const { userAds } = useContext(UserContext);

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
          sold
        />
      </div>
    );
  };
  const UserAds = <UserOwnAds />;
  const UserActiveAds = <UserOwnActiveAds />;
  const UserSoldAds = <UsersoldAds />;

  return (
    <>
      <Topbar title="My Ads" />
      <ThreeTotab
        firstTabname="All"
        secondTabname="Active"
        thirdTabname="Sold"
        firstSlideContent={UserAds}
        secondSlideContent={UserActiveAds}
        thirdSlideContent={UserSoldAds}
        screenname="chatting"
      />
    </>
  );
};
