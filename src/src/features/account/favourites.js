import React, { useContext } from "react";
import { ProductArchive } from "./../productarchive/product.archive";
import { Topbar } from "./../../components/global/topbar";
import { UserContext } from "./../../services/user.contex";

export const UserMyfavorite = () => {
  const { FavAds } = useContext(UserContext);
  return (
    <>
      <Topbar title="My Favourites" />
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
    </>
  );
};
