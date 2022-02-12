import React from "react";
import { Topbar } from "../../components/global/topbar";
import { ThreeTotab } from "../../components/toptab/toptab";
import { ProductArchive } from "./../productarchive/product.archive";

export const UserMyads = () => {
  const UserOwnAds = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <ProductArchive deleter={true} />
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
        <ProductArchive deleter={true} sold />
      </div>
    );
  };

  const UserAds = <UserOwnAds />;
  const UserActiveAds = <UserOwnActiveAds />;

  return (
    <>
      <Topbar title="My Ads" />
      <ThreeTotab
        firstTabname="All"
        secondTabname="Active"
        thirdTabname="Sold"
        firstSlideContent={UserAds}
        secondSlideContent={UserActiveAds}
        thirdSlideContent={UserAds}
        screenname="chatting"
      />
    </>
  );
};
